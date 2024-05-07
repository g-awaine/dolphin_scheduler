#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export PYSPARK_DRIVER_PYTHON=/bin/python3.11
export PYTHON_LAUNCHER=/bin/python3.11
export PYSPARK_PYTHON=/bin/python3.11
$SPARK_HOME/bin/spark-submit \
    --master spark://spark-master:7077 \
    --conf spark.driver.cores=2 \
    --conf spark.driver.memory=2G \
    --conf spark.executor.instances=1 \
    --conf spark.executor.cores=2 \
    --conf spark.executor.memory=2G \
    --files /local_storage/reddit/processing/500-20240423.json \
    --name reddit_preprocessing spark_reddit_preprocessing.py

# $SPARK_HOME/bin/spark-submit \
#     --master local \
#     --files /local_storage/reddit/processing/500-20240423.json \
#     --name reddit_preprocessing spark_reddit_preprocessing.py
