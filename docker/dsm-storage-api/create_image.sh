#!/bin/bash

script_dir="$(dirname "${BASH_SOURCE[0]}")" 
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
project_folder=$parent_path"/../../br.unb.autoexp.storage"

echo "Building dsm-storage jar from project "$project_folder
cd $project_folder
mvn clean package
storage_version=$(mvn org.apache.maven.plugins:maven-help-plugin:2.1.1:evaluate -Dexpression=project.version | grep -v '\[')
echo "Preparing to copy jar file"
storage_jar=$project_folder"/target/br.unb.autoexp.storage-"$storage_version".jar"
cp $storage_jar $parent_path"/dsm-storage.jar"
cd $parent_path
docker build -t eneiascs/dsm-storage-api .
