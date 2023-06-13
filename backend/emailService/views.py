from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FutureEmail
from datetime import datetime, date
from emailService.task import send_mail_task





engine = create_engine("sqlite:///db.sqlite3" +'?check_same_thread=False', echo=True)
Session = sessionmaker(bind=engine)
session = Session()

@api_view(['GET'])
def test_request(request):
    records = session.query(FutureEmail).all()
    print(records)
    response = []
    for record in records:
        response.append({
            "email" : record.email,
            "email_text" : record.email_text,
            "send_date" : record.send_date
        })
    return Response(response)
# email = FutureEmail(email='example@example.com', email_text='Hello', send_date='2023-06-15')

@api_view(['POST'])
def create_email(request):

    send_date = datetime.strptime(request.data["date"], '%Y-%m-%d').date()
    
    email = FutureEmail(email_text=request.data["email_text"], send_date=send_date, email=request.data["email"])

    send_mail_task.delay('Confirmation Email from FutureMe', "Hello! This email is just to confirm that you are able to receive messages on this email address. You will receive your letter from your younger self as per scheduled :). Hope you enjoy the surprise from yourself!", request.data["email"])
    session.add(email)
    session.commit()
    return JsonResponse({'message': 'email request received successfully!'})

