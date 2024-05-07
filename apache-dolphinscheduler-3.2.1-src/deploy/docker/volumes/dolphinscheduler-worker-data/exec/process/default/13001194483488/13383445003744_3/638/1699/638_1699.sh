#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export PYSPARK_DRIVER_PYTHON=/bin/python3.11
$SPARK_HOME/bin/spark-submit \
    --master spark://spark-master:7077 \
    --deploy-mode client \
    --conf spark.driver.cores=1 \
    --conf spark.driver.memory=1G \
    --conf spark.executor.instances=1 \
    --conf spark.executor.cores=1 \
    --conf spark.executor.memory=1G \
    --name reddit_preprocessing \
    spark-test.py
