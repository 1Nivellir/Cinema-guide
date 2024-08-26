FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["node", ".output/server/index.mjs "]
