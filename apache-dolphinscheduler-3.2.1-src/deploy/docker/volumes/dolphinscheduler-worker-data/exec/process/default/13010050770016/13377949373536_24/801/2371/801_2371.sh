#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export HADOOP_HOME=/opt/hadoop-3.4.0
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export PYSPARK_DRIVER_PYTHON=/bin/python3.11
export PYTHON_LAUNCHER=/bin/python3.11
${PYTHON_LAUNCHER} /tmp/dolphinscheduler/exec/process/default/13010050770016/13377949373536_24/801/2371/py_801_2371.py