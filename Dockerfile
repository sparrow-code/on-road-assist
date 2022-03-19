# Create a docker container from a Dockerfile

FROM alpine:latest
# To Change Working Directory
WORKDIR /onroadassist.in

#To Update OS and Packeg And install Node Js
RUN apk update && apk add --no-cache nodejs && apk add --no-cache npm

RUN apk add --no-cache git

RUN git clone https://github.com/sparrow-code/on-road-assist.git

# To intall Required Package and PM2
RUN  npm i && npm install pm2 -g

# To Run Build
RUN pm2 start app.js --name="onroadassist"

# Expose Port 3000
EXPOSE 3000/tcp
