# go-chat

#### Download dependencies

`go get -u google.golang.org/grpc`

`go get -u github.com/golang/protobuf/protoc-gen-go`

#### Compile proto files 

`protoc --go_out=plugins=grpc:. proto/*.proto`

#### Run the app

Build docker container:

`docker build -t go-chat .`

Run docker container:

`docker run -it --name go-chat -p 8080:8080 go-chat`