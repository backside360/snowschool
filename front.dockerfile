FROM node:12-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm i -D webpack-cli && \
    npm install --only=prod
COPY . /app
RUN npm run build:front
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf