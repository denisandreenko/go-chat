FROM golang:alpine as build-env

ENV GO111MODULE=on

RUN apk update && apk add bash ca-certificates git gcc g++ libc-dev

RUN mkdir -p /app/proto

WORKDIR /app

COPY ./proto/service.pb.go /app/proto
COPY ./main.go /app
COPY go.mod .
COPY go.sum .

RUN go mod download

RUN go build -o chat .

CMD ./chat