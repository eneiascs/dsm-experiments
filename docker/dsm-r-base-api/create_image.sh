#!/bin/bash
script_dir="$(dirname "${BASH_SOURCE[0]}")" 
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
project_folder=$parent_path"/../../br.unb.autoexp.r-base-api"

echo "Building r-base-api jar from project "$project_folder
cd $project_folder
mvn clean package
storage_version=$(mvn org.apache.maven.plugins:maven-help-plugin:2.1.1:evaluate -Dexpression=project.version | grep -v '\[')
echo "Preparing to copy jar file"
storage_jar=$project_folder"/target/br.unb.autoexp.r-base-api-"$storage_version".jar"
cp $storage_jar $parent_path"/r-base-api.jar"
cd $parent_path
docker build -t eneiascs/dsm-r-base-api .
