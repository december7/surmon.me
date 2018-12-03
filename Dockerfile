FROM node:10-slim

RUN mkdir -p /myapp
WORKDIR /myapp
COPY . /myapp

EXPOSE 3000 3000

RUN yarn install && yarn cache clean --force && yarn run build

CMD [ "yarn", "start" ]
