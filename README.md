# rabbitmq-poc
Simple RabbitMQ Poc with Node web publisher and Python console consumer

Docker manual build and run

# build and run producer
```
cd producer
docker build -t producer .
docker run -it --rm -p 3000:3000 -e QUEUE_NAME='my-queue' -e AMQP_HOST='host.docker.internal' producer
```

# build and run consumer
```
cd consumer
docker build -t consumer .
docker run -it --rm -e QUEUE_NAME='my-queue' -e AMQP_HOST='host.docker.internal' consumer
```

# build and run RabbitMQ
```
docker run -d -p 15672:15672 -p 5672:5672 --name rabbitmq rabbitmq:3-management-alpine
```

Docker compose build and run all
```
docker-compose up
```

View consumer result
```
docker logs consumer 
```

Produce message
[http://localhost:3000/message](http://localhost:3000/message)