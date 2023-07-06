FROM node:16 as test-stage

WORKDIR /usr/src/app

ENV CI=true

COPY . .

RUN npm ci

RUN npm run test

FROM node:16 as build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:3000

COPY --from=test-stage /usr/src/app .

RUN npm run build

FROM nginx:1.25.1-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html