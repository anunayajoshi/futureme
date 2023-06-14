from celery import shared_task
from django.core.mail import send_mail
import time 
from backend import settings
from datetime import date
from .models import FutureEmail
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine("sqlite:///db.sqlite3" +'?check_same_thread=False', echo=True)
Session = sessionmaker(bind=engine)
session = Session()
import os

@shared_task(serializer='json', name="send_mail")
def send_mail_task(subject, message, receiver):
    send_mail(subject, message, settings.EMAIL_HOST_USER, [receiver])

@shared_task
def check_dates_task():
    today = date.today().strftime('%Y-%m-%d')
    records = session.query(FutureEmail).filter(FutureEmail.send_date == today).all()
    for record in records:
        send_mail_task.delay("A message from your younger self", record.email_text , record.email)    