# rabbitmq-redis-poc
Simple RabbitMQ and Redis Poc with Node web publisher and Python console consumer-redis / consumer-rabbitmq

Docker compose build
```
docker-compose up
```

View consumer-redis result
```
docker logs consumer-redis 
```

View consumer-rabbitmq result
```
docker logs consumer-rabbitmq 
```

Produce message
[http://localhost:3000/message](http://localhost:3000/message)

Need first create the queue my-queue (Transient) in the rabbitmq container, [http://localhost:15672](http://localhost:15672)

![alt text](https://github.com/darioajr/rabbitmq-redis-poc/raw/main/pubsub.png "Producer")
