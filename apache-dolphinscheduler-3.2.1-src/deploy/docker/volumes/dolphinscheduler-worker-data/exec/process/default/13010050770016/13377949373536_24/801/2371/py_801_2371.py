#-*- encoding=utf8 -*-

from pyspark.sql import SparkSession
from pyspark.sql.functions import col, from_json
from pyspark.sql.types import StringType, StructType, StructField, IntegerType

spark = SparkSession.builder \
    .master("local") \
    .appName("Reddit Keyword Filtering") \
    .config("spark.jars.packages", "org.apache.spark:spark-sql-kafka-0-10_2.12:3.5.1") \
    .config("spark.sql.streaming.checkpointLocation", r"/tmp/") \
    .config("spark.driver.extraJavaOptions", "-Divy.cache.dir=/tmp -Divy.home=/tmp") \
    .getOrCreate()

# define the schema for the JSON data
schema = StructType([
    StructField("user", StringType(), nullable=True),
    StructField("content", StringType(), nullable=True),
    StructField("url", StringType(), nullable=True),
    StructField("context", StringType(), nullable=True),
    StructField("score", IntegerType(), nullable=True),
    StructField("type", StringType(), nullable=True),
    StructField("id", StringType(), nullable=True),
    StructField("datetime", StringType(), nullable=True)  # Assuming the datetime is string type, you can change it to TimestampType if needed
])

# parse the topics parameter
topics = "reddit_post_preprocessed|reddit_post_filtered"
parsed_topics = topics.split("|")

# define the parameters for the input and output kafka broker and topic
kafka_broker = "kafka:9092"
input_kafka_topic = parsed_topics[0]
output_kafka_topic = parsed_topics[1]

# Subscribe to the input topic
df = spark \
    .readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", kafka_broker) \
    .option("subscribe", input_kafka_topic) \
    .load()

# parse the JSON data in the 'value' column using the defined schema then create a dataframe containing the reddit data
df = df.select(col("value").cast("string")) \
    .withColumn("value", from_json("value", schema)) \

parsed_df = df \
    .select("value.*")

# filter rows containing specific keywords
keywords = ["singapore", "sg"]

# initialize the filter condition with False
filter_condition = col("content").contains(keywords[0])

# loop through the rest of the keywords and update the filter condition
for keyword in keywords[1:]:
    filter_condition = filter_condition | col("content").contains(keyword)

# apply the filter condition to the DataFrame
filtered_df = parsed_df.filter(filter_condition)

# stream the data to kafka
kafka_write = filtered_df \
    .selectExpr("'' AS key", "to_json(struct(*)) AS value") \
    .writeStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", kafka_broker) \
    .option("topic", output_kafka_topic) \
    .start()

# Wait for the termination of the query
kafka_write.awaitTermination()
