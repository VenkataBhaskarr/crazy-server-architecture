FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs npm

COPY . /opt/source/frontend
WORKDIR /opt/source/frontend

RUN npm install 

CMD ["npm","run","dev"]