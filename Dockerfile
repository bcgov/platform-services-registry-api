FROM node:16.15.0-alpine

ARG NODE_MAJOR_VERSION=16
ARG NODE_VERSION=16.15.0

RUN mkdir /var/opt/build
WORKDIR /var/opt/build

COPY . .

RUN npm install -f
RUN npm run build
# RUN rm -rf src

RUN apk update && \
    apk upgrade && \
    apk add bash 



EXPOSE 4000

CMD [ "npm", "start" ]
