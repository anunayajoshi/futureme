import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')



app = Celery('backend')
app.config_from_object('django.conf:settings', namespace='CELERY')


app.conf.beat_schedule = {
   'check_mail_everyday': {
       'task': 'emailService.task.check_dates_task',
       'schedule': crontab(hour=1, minute=00),

   }
}

app.autodiscover_tasks()