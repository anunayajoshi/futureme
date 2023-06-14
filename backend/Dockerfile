# Docker file
FROM python:3.10

ENV PYTHONUNBUFFERED 1

ADD . /backend

RUN pip install -r /backend/requirements.txt

WORKDIR /backend

# EXPOSE 8000


