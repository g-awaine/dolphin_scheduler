#-*- encoding=utf8 -*-

# use kafka streaming api
from pyspark.sql.functions import udf, col, from_json
from pyspark.sql.types import FloatType, ArrayType, StringType, StructType, StructField, IntegerType
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA
from pyspark.sql import SparkSession
import os

# access the nltk data directory variable
nltk_data_dir = os.environ.get('NLTK_DATA')

# download the model
nltk.download('vader_lexicon', download_dir=nltk_data_dir)

# init the sentiment analysis object
sia = SIA()

# init Spark session
spark = SparkSession.builder \
    .master('local') \
    .appName("Sentiment Analysis") \
    .config("spark.jars.packages", "org.apache.spark:spark-sql-kafka-0-10_2.12:3.5.1") \
    .config("spark.sql.streaming.checkpointLocation", r"/tmp/") \
    .config("spark.driver.extraJavaOptions", "-Divy.cache.dir=/tmp -Divy.home=/tmp") \
    .getOrCreate()

# define a udf to perform sentiment analysis
def analyze_sentiment(message):
    # Perform sentiment analysis
    pol_score = sia.polarity_scores(message)
    # Return the compound score
    return [pol_score['neg'], pol_score['neu'], pol_score['pos'], pol_score['compound']]

# Register the function as a UDF
analyze_sentiment_udf = udf(lambda x:analyze_sentiment(x), ArrayType(FloatType()))

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

# parse the input parameter
topics = "reddit_post_filtered|reddit_post_sa"
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

# perform sentiment analysis on the parsed dataframe 
sa_reddit_df = parsed_df.withColumn('sentiment_score', analyze_sentiment_udf(parsed_df['content']))

# split the sentiment_score column into separate columns
sa_reddit_df = sa_reddit_df.withColumn("negative", sa_reddit_df["sentiment_score"][0]) \
            .withColumn("neutral", sa_reddit_df["sentiment_score"][1]) \
            .withColumn("positive", sa_reddit_df["sentiment_score"][2]) \
            .withColumn("compound", sa_reddit_df["sentiment_score"][3]) \
            .drop('sentiment_score')  # drop sentiment_score column after splitting

# stream the data to kafka
kafka_write = sa_reddit_df \
    .selectExpr("'' AS key", "to_json(struct(*)) AS value") \
    .writeStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", kafka_broker) \
    .option("topic", output_kafka_topic) \
    .start()

# Wait for the termination of the query
kafka_write.awaitTermination()