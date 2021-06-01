FROM python:alpine
CMD cd /app && pip install -r requirements.txt && gunicorn -b 0.0.0.0:8000 app:app
#CMD /bin/sh
#this does open cmd mb not a good way?
