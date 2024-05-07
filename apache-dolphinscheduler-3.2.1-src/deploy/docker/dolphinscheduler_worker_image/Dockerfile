FROM apache/dolphinscheduler-worker:3.2.1

# Install Python and pstree (needed to successfully delete processes)
RUN apt update && \
    apt install -y python3.11 && \
    apt-get install -y python3-pip && \
    apt -y install psmisc

# download Apache Spark binary and move it to /opt
RUN wget -O /opt/spark.tar.gz https://dlcdn.apache.org/spark/spark-3.5.1/spark-3.5.1-bin-hadoop3.tgz && \
    tar -xzf /opt/spark.tar.gz -C /opt/ && \
    rm /opt/spark.tar.gz

# download Apache Kafka binary and move it to /opt
RUN wget -O /opt/kafka.tar.gz https://downloads.apache.org/kafka/3.7.0/kafka_2.13-3.7.0.tgz && \
    tar -xzf /opt/kafka.tar.gz -C /opt/ && \
    rm /opt/kafka.tar.gz

# download Apache Hadoop binary and move it to /opt
RUN wget -O /opt/hadoop.tar.gz https://dlcdn.apache.org/hadoop/common/hadoop-3.4.0/hadoop-3.4.0.tar.gz && \
    tar -xzf /opt/hadoop.tar.gz -C /opt/ && \
    rm /opt/hadoop.tar.gz
    
# copy the local requirement.txt into the container
COPY requirements.txt ./

# pip install the dependencies from the requirements.txt into the python3.11 interpreter
RUN python3.11 -m pip install --no-cache-dir --upgrade pip && \
    python3.11 -m pip install --no-cache-dir -r requirements.txt


# download Apache Spark 2.4.0 binary and move it to /opt for the data quality node
RUN wget -O /opt/spark240.tar.gz https://archive.apache.org/dist/spark/spark-2.4.0/spark-2.4.0-bin-hadoop2.7.tgz && \
    tar -xzf /opt/spark240.tar.gz -C /opt/ && \
    rm /opt/spark240.tar.gz
