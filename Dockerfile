## Source from node.js - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
