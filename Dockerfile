FROM node:18-bullseye AS build

WORKDIR /app
COPY . .

# Install python/pip
ENV PYTHONUNBUFFERED=1
#RUN apk add --no-cache python3 py3-pip
#RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
#RUN apk add --update --no-cache python3 
RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk add --no-cache git

# Install make etc.
RUN apk add build-base
RUN apk add --no-cache autoconf
#RUN SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install --arch=x64 --platform=linux sharp

#RUN yarn cache clean && rm -rf node_modules && yarn install
RUN yarn
RUN yarn build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]