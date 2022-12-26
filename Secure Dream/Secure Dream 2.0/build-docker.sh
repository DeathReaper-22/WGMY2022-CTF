#!/bin/sh

docker build . -t wgmy-secure-dream2 && \
docker run --rm --name=wgmy-secure-dream2 -p30555:30555 wgmy-secure-dream2
