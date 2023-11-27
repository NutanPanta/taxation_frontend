FROM node:20-alpine3.14 AS builder

ENV PATH /app/node_modules/.bin:$PATH

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .

RUN npm install

ENV NODE_ENV production

# Copy app files
COPY . .

