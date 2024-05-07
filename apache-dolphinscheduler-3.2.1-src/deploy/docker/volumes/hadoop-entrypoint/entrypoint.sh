#!/bin/bash

# Function to check if HDFS is ready
is_hdfs_ready() {
    hdfs dfs -ls / &> /dev/null
}

# Wait until HDFS is ready
echo "Waiting for HDFS to be ready..."
until is_hdfs_ready; do
    sleep 5
done
echo "HDFS is ready."

# Change permissions
echo "Changing permissions..."
hdfs dfs -chmod +w /

# Run the hdfs namenode command
echo "Starting HDFS namenode..."
exec hdfs namenode
