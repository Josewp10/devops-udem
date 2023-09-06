FROM node:18-alpine
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install

COPY . ./

ARG DB_USER_ENV
ARG DB_PASSWORD_ENV
ARG DB_HOST_ENV
ARG AWS_DEVOPS_ACCES_KEY_ENV
ARG AWS_DEVOPS_SECRET_ACCES_KEY_ENV

ENV DB_USER=$DB_USER_ENV
ENV DB_PASSWORD=$DB_PASSWORD_ENV
ENV DB_HOST=$DB_HOST_ENV
ENV AWS_DEVOPS_ACCES_KEY=$AWS_DEVOPS_ACCES_KEY_ENV
ENV AWS_DEVOPS_SECRET_ACCES_KEY=$AWS_DEVOPS_SECRET_ACCES_KEY_ENV


EXPOSE 3001
CMD [ "npm", "start" ]
