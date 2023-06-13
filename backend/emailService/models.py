from django.db import models
from sqlalchemy import Column, Integer, String, Date
# Create your models here.
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

Base = declarative_base()


class FutureEmail(Base):
    __tablename__ = 'future_email'

    id = Column(Integer, primary_key=True)
    email = Column(String)
    email_text = Column(String)
    send_date = Column(Date)

    def __repr__(self):
        return f"<FutureEmail(id={self.id}, email='{self.email}', email_text='{self.email_text}', send_date='{self.send_date}')>"

