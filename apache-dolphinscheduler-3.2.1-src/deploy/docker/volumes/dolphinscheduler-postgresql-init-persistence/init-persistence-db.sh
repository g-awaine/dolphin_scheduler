#!/bin/bash
set -e

export PGPASSWORD="$POSTGRESQL_PASSWORD"

# initialise the databases
psql -v ON_ERROR_STOP=1 --username "$POSTGRESQL_USERNAME" --dbname "$POSTGRESQL_DATABASE" <<-EOSQL
    	
    	CREATE DATABASE persistence;
    
	CREATE DATABASE gnews_article_hash_db;
	
EOSQL

# initialise the tables in the persistence database
psql -v ON_ERROR_STOP=1 --username "$POSTGRESQL_USERNAME" --dbname persistence <<-EOSQL
    
	CREATE TABLE IF NOT EXISTS filtered_data_persistence (
	    authors VARCHAR(50)[] NOT NULL,
	    content TEXT,
	    url TEXT NOT NULL,
	    context TEXT,
	    type VARCHAR(20) NOT NULL,
	    datetime TIMESTAMP NOT NULL
	);
	
EOSQL

# initialise the tables in the article hash database
psql -v ON_ERROR_STOP=1 --username "$POSTGRESQL_USERNAME" --dbname gnews_article_hash_db <<-EOSQL
    	
	CREATE TABLE IF NOT EXISTS article_hashes (
	    hash TEXT NOT NULL
	);
	
EOSQL
