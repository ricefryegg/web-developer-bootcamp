FROM node:12.16.2

WORKDIR /frontend

ADD ./package.json .

RUN npm install --silent

ADD . .

ENTRYPOINT npm start