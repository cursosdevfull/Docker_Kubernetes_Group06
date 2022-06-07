FROM node:14-alpine

ARG DIR=frontend

WORKDIR /app

COPY ${DIR}/package.json .

RUN npm install

COPY ${DIR}/. .

CMD ["npm", "run", "start"]