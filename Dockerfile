FROM node:8.0.0-alpine
RUN mkdir -p /var/app
COPY . /var/app
WORKDIR /var/app
RUN npm install cnpm --registry=https://registry.npm.taobao.org
RUN ./node_modules/.bin/cnpm install --registry=https://registry.npm.taobao.org
EXPOSE 8080
CMD npm run dev
