from pyspark.sql import SparkSession

# Initialize Spark session
spark = SparkSession.builder \
    .appName("Create DataFrame from List") \
    .getOrCreate()

# Define a list of dictionaries
data = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
]

# Create DataFrame from the list
df = spark.createDataFrame(data)

# Show DataFrame
df.show()

# Stop Spark session
spark.stop()
