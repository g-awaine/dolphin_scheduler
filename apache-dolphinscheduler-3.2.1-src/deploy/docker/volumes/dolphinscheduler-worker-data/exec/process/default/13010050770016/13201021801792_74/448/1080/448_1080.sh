#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export HADOOP_CONF_DIR=/opt/hadoop-3.4.0/etc/hadoop
export PYSPARK_DRIVER_PYTHON=/bin/python3.11
$SPARK_HOME/bin/spark-submit \
    --master spark://spark-master:7077 \
    --conf spark.driver.cores=1 \
    --conf spark.driver.memory=512M \
    --conf spark.executor.instances=2 \
    --conf spark.executor.cores=2 \
    --conf spark.executor.memory=1G \
    --files /local_storage/reddit/processing/386-20240422.json \
    --name reddit_preprocessing spark_reddit_preprocessing.py
