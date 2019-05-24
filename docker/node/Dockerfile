FROM node:10-slim

RUN apt-get update -qq \
    && apt-get install -qq --no-install-recommends \
        git \
        yarn \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /application
