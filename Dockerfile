FROM node:16
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src src
COPY index.js index.js

EXPOSE 80
CMD [ "node", "index.js" ]