FROM node:18.18.2-alpine3.18

ARG NODE_MAJOR_VERSION=18
ARG NODE_VERSION=16.18.2

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
