import os
import redis
import json

queue = os.environ.get('QUEUE_NAME')
redis_host = os.environ.get('REDIS_HOST')
redis_port = os.environ.get('REDIS_PORT')

redis_conn = redis.Redis(host=redis_host, port=redis_port)

def main():
    pubsub = redis_conn.pubsub()
    pubsub.subscribe(queue)
    print('Subscribed to ' + queue + ', waiting for messages...')
    for message in pubsub.listen():
        if message.get("type") == "message":
            data = message.get("data")
            data_ = data.decode('UTF-8')
            print(data_)

if __name__ == '__main__':
    main()
