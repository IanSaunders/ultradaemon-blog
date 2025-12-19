FROM node:22-bullseye AS build

WORKDIR /app
COPY . .

ENV PYTHONUNBUFFERED=1

# Install build dependencies on Debian
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 python3-pip git build-essential autoconf \
  && rm -rf /var/lib/apt/lists/*

RUN yarn
RUN yarn build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
