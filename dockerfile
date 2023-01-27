FROM node:19.4.0-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache yarn

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.19-alpine

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
