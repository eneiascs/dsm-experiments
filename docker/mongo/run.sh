#!/bin/bash
mongod &
sleep 5
mongo experiments /opt/init.js
while true; do sleep infinity; done
