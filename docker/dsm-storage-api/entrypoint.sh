#!/bin/bash
mongo mongodb://dsm-storage-mongo:27017/experiments /opt/init.js
java -Dspring.data.mongodb.uri=mongodb://dsm-storage-mongo:27017/experiments -Djava.security.egd=file:/dev/./urandom -jar /opt/dsm-storage.jar

