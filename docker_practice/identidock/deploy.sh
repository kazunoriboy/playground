#!/bin/bash
set -e

echo "Starting identidock system"

docker run -d --restart=always --name redis:3
docker run -d --restart=always --name dnmonster amouat/dnmonster:1.0
docker run -d --restart=always \
    --link dnmonster:dnmonster \
    --link redis:redis \
    -e ENV=PROD \
    --name identidock kazunoriboy/identidock:1.0
docker run -d --restart=always \
    --name proxy \
    --link identidock:identidock \
    -p 80:80 \
    -e NGINX_HOST=identidock.com \
    -e NGINX_PROXY=http://identidock:9090 \
    kazunoriboy/proxy:1.0

echo "Started"

