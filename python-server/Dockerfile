FROM ubuntu
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip

COPY . /opt/source/python
WORKDIR /opt/source/python

RUN pip install flask

CMD ["python3" , "main.py"]
