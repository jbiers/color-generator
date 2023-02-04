FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install

FROM node:19-alpine3.16

WORKDIR /app

COPY --from=builder /app/ .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
