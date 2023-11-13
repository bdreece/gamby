FROM node:20-alpine
WORKDIR /usr/src/gamby

RUN npm i -g yarn

COPY package.json yarn.lock go.mod go.sum ./
RUN yarn && \
    go mod download && \
    go mod verify

RUN yarn build && \
    go build -v -o /usr/bin ./...

CMD [ "gamby" ]


