import pyspark
from pyspark.sql import SparkSession
from pyspark.sql.functions import concat, lit, split, udf, from_unixtime
from pyspark.sql.types import StringType
from pyspark import SparkFiles
import json
import ast
import re
import os

# define a function to identify the exact type of reddit data extracted from each entry
def identify_type(type):
    if type=="t3":
        return "post"
    elif type=="t1":
        return "comment"
    else:
        return None
    
# Register the custom function as a UDF
identify_type_udf = udf(lambda x:identify_type(x), StringType())

# initialise spark context and spark session
# sc = pyspark.SparkContext(appName="reddit_preprocessing")
spark = SparkSession.builder.appName("reddit_preprocessing").getOrCreate()

# create a regular expression to search for JSON files
pattern = r".+\.json$"

# compile the regular expression pattern
regex = re.compile(pattern)

# get root directory where the submitted files are stored
root_dir = SparkFiles.getRootDirectory()

# list the files and obtain the name of the raw reddit data json
for filename in os.listdir(root_dir):
    # Check if the filename matches the pattern
    if regex.match(filename):
        reddit_json_file = filename
        reddit_json_dir = f'{root_dir}/{filename}'
        break

raw_df = spark.read.json(reddit_json_dir)

# split the name column into a type column and an ID column
new_df = raw_df.withColumn("type", split(raw_df["name"], "_")[0]) \
             .withColumn("id", split(raw_df["name"], "_")[1])

# convert the permalink values into actual links that link to the actual post and comment
new_df = new_df.withColumn("permalink", concat(lit("https://www.reddit.com"), new_df["permalink"]))

# convert the unixtime to the datatime format (YY-MM-DD HH-mm-ss)
new_df = new_df.withColumn("datetime", from_unixtime("unix_time"))

# identify the exact type of reddit data that was extracted from the api i.e post or comment
new_df = new_df.withColumn("type", identify_type_udf(new_df["type"]))

# delete the columns which are no longer needed with the addition of the other features.
new_df = new_df.drop("name")
new_df = new_df.drop("unix_time")

# change the names of the columns 
# (author->user)
# (body->content)
# (permalink->url)
# (post_title->context)

new_df = new_df.withColumnsRenamed({'author': 'user', 
                                    'body': 'content',
                                    'permalink': 'url',
                                    'post_title':'context',
                                    })

# write dataframe as a JSON to the preprocessed_folder
new_df.write.json(f"file:///local_storage/reddit/preprocessed/preprocessed-{reddit_json_file}")

spark.stop()