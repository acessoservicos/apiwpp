FROM node:20.10.0

# Instalação de pacotes linux
RUN apk update && apk --no-cache add --virtual builds-deps build-base python3

# Add support for https on wget
RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

COPY . .

WORKDIR ../

RUN npm install

EXPOSE 3007

CMD npm start