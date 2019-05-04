FROM node:10.15-alpine AS development

RUN npm i -g npm@latest
RUN npm i -g yarn@latest

WORKDIR /opt/secrets-frontend

COPY package.json yarn.lock /opt/secrets-frontend/

RUN yarn
COPY . /opt/secrets
