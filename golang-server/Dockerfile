FROM ubuntu
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y golang

COPY . /opt/source/go
WORKDIR /opt/source/go
ENV GO111MODULE=off
RUN go build -o main .
CMD ["./main"]
