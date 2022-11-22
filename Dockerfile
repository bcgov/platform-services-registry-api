FROM node:17-alpine

RUN mkdir /var/opt/build
WORKDIR /var/opt/build

COPY . .

RUN npm install
RUN npm run build
# RUN rm -rf src

RUN apk update && \
    apk upgrade && \
    apk add bash 



EXPOSE 4000

CMD [ "node", "dist/index.js" ]
