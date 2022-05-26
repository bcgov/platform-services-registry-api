FROM node:17-alpine
ENV WORK_PATH /opt/app

RUN apk update && \
    apk upgrade && \
    apk add bash 

EXPOSE 4222 4000

CMD [ "npm", "run", "dev" ]
