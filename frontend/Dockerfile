FROM node:9.11-alpine AS development
RUN apk --update add git
RUN npm i -g npm@6.0.1

WORKDIR /opt/secrets

COPY package.json package-lock.json /opt/secrets/

RUN npm i
COPY . /opt/secrets