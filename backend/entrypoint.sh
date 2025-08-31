#!/bin/sh

echo "Waiting for MySQL..."

# keep retrying until MySQL is ready
while ! nc -z db 3306; do
  sleep 1
done

echo "MySQL started!"

# Run migrations
python manage.py migrate --noinput

# Start Django server
exec python manage.py runserver 0.0.0.0:8000
