FROM node:14-alpine as STAGE_BUILD

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=STAGE_BUILD /app/dist/appAngular /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf