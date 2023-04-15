# Specify a base image
FROM node:17-alpine3.15

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

# Set up a default command
CMD [ "npm","start" ]

RUN npm run build