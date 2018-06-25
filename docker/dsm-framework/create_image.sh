#!/bin/bash

script_dir="$(dirname "${BASH_SOURCE[0]}")" 
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
project_folder=$parent_path"/../../br.unb.autoexp.web.build"

echo "Building autoexp war from project "$project_folder
cd $project_folder
mvn clean install -P autoexp
echo "Preparing to copy war file"
war=$project_folder"/autoexp/target/autoexp.war"
cp $war $parent_path"/autoexp.war"
cd $parent_path
docker build -t eneiascs/dsm-framework:1.0.0 .
