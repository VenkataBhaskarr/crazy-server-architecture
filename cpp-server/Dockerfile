FROM ubuntu
RUN apt-get update
RUN apt-get install -y clang

COPY . /opt/source/cpp
WORKDIR /opt/source/cpp/cmake-build-debug
CMD ["./untitled"]
