FROM node:18.18.2-alpine3.18

RUN mkdir /var/opt/build
WORKDIR /var/opt/build

COPY . .

RUN npm install -f
RUN npm run build

RUN apk update && \
    apk upgrade && \
    apk add bash 

EXPOSE 4000

CMD ["--max-old-space-size=50", "./dist/index.js"]
