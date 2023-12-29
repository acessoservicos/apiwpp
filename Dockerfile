FROM node:20.10.0

WORKDIR ../

COPY . .

RUN npm install

EXPOSE 3007

CMD npm start