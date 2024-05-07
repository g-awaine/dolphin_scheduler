#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export HADOOP_CONF_DIR=/opt/hadoop-3.4.0/etc/hadoop
$SPARK_HOME/bin/spark-submit \
    --master spark://spark-master:7077 \
    --conf spark.driver.cores=1 \
    --conf spark.driver.memory=512M \
    --conf spark.executor.instances=2 \
    --conf spark.executor.cores=2 \
    --conf spark.executor.memory=1G \
    --name myapple spark-test.py
