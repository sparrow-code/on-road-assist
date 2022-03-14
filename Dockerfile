FROM apline:latest
RUN apk add --no-cache nodejs npm 

WORKDIR /webapp

COPY . /webapp/

RUN npm install

EXPOSE 3000