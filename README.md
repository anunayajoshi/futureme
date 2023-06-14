# FutureMe Project

![Alt text](image.png)


## Tech Stack Used

**Frontend**
* NextJS
* Typescript
* TailwindCSS

**Backend**
* Django
* SQLAlchemy
* Celery + Celery Beat
* Redis
* SQLite

## Running the app

You can use `npm run dev` to run the frontend, and `docker-compose up` for the backend. 

## Build Process

Implementing a message queue system using Celery, as well as a scheduler using Celery Beat for sending the emails to the user. Learnt about some of the tradeoffs in Celery vs Kafka, and how such systems help with scalability.