# syntax=docker/dockerfile:1
FROM node:lts AS base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM deps AS build
COPY . .
ARG API_BASE_URL
ARG API_AUTH_KEY
ENV API_BASE_URL=$API_BASE_URL
ENV API_AUTH_KEY=$API_AUTH_KEY
RUN npm run build

FROM build AS serve
EXPOSE 5173
ENV NODE_ENV=production
ENV API_BASE_URL=$API_BASE_URL
ENV API_AUTH_KEY=$API_AUTH_KEY
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]