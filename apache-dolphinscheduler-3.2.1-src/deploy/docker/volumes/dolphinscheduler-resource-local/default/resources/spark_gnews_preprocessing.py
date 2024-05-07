import json 
import pyspark
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, regexp_replace, split, to_timestamp, date_format, concat_ws, lit
from pyspark.sql.types import StringType
from pyspark import SparkFiles
import re
import os
import ast

# Initialize Spark context and session
sc = pyspark.SparkContext(appName="gnews_preprocessing")

# additionally set the time parser to legacy to parse the datetime column
spark = SparkSession.builder \
    .appName("gnews_preprocessing") \
    .config("spark.sql.legacy.timeParserPolicy", "LEGACY") \
    .getOrCreate()

# create a regular expression to search for JSON files
pattern = r".+\.json$"

# compile the regular expression pattern
regex = re.compile(pattern)

# get root directory where the submitted files are stored
root_dir = SparkFiles.getRootDirectory()

for filename in os.listdir(root_dir):
    # Check if the filename matches the pattern
    if regex.match(filename):
        gnews_json_file = filename
        gnews_json_dir = f'{root_dir}/{filename}'
        break

raw_df = sc.wholeTextFiles(gnews_json_dir).map(lambda x:ast.literal_eval(x[1]))\
                        .map(lambda x: json.dumps(x))

raw_df = spark.read.json(raw_df)

# convert the date string to a timestamp then format it into the format of (yy-MM-dd HH:mm:ss)
new_df = raw_df.withColumn("datetime", to_timestamp("datetime", "EEE, dd MMM yyyy HH:mm:ss z"))
new_df = new_df.withColumn("datetime", date_format("datetime", "yyyy-MM-dd HH:mm:ss"))

# add a column called "type" to identify the type of data entry these are in the database, as well as conform with the standard schema
new_df = new_df.withColumn("type", lit("article"))

# drop columns that are not part of the standard schema to ensure compatibility with downstream tasks
new_df = new_df.drop("description")
new_df = new_df.drop("publisher_href")

# rename the columns to follow the standard schema
# (context-> content)
# (title->context)

new_df = new_df.withColumnsRenamed({'context': 'content', 
                                    'title': 'context',
                                    })

# reformat the order of the columns in the dataframe
new_df = new_df.select("authors", "content", "url", "context", "type", "datetime")

# Show the resulting DataFrame
new_df.show()

# save cleaned_df to a json file overwriting the existing file if there is any
preprocessed_json = new_df.toJSON().collect()

# Convert the list of JSON strings into a list of dictionaries
# using json.loads to parse each string
# json_dicts = [json.loads(item) for item in archived_json]

# define the parameters for the kafka broker and topic
kafka_params = {
    "kafka.bootstrap.servers": "kafka:9092",  # Kafka broker address
    "topic": "gnews_preprocessed"  # Kafka topic name
}

# write data to Kafka
for message in preprocessed_json:
    spark \
        .createDataFrame([message], StringType()) \
        .write \
        .format("kafka") \
        .options(**kafka_params) \
        .save()
