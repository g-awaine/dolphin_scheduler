#!/bin/bash
BASEDIR=$(cd `dirname $0`; pwd)
cd $BASEDIR
export SPARK_HOME=/opt/spark-3.5.1-bin-hadoop3
export JAVA_HOME=/opt/java/openjdk
export PYSPARK_DRIVER_PYTHON=/bin/python3.11
export PYSPARK_PYTHON=/bin/python3.11
export PYTHON_LAUNCHER=/bin/python3.11
export NLTK_DATA=/local_storage/nltk_data
${PYTHON_LAUNCHER} /tmp/dolphinscheduler/exec/process/default/13010050770016/13386218435520_19/745/2004/py_745_2004.py