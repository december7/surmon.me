FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install && yarn cache clean --force && yarn run build

EXPOSE 3000

CMD [ "yarn", "run" , "start" ]
