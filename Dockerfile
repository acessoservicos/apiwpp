FROM node:20.10.0

COPY . .

WORKDIR ../

RUN npm install

EXPOSE 3007

CMD npm start