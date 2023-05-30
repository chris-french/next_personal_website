#!/bin/bash

docker build -t next-app -f .Dockerfile .

# Create a temporary container but do not start it
container_id=$(docker create next-app)

# Copy the output files from the Docker container to the local "out" directory
docker cp $container_id:/app/out ./

# Remove the temporary container
docker rm $container_id