var express = require('express');
var router = express.Router();

var amqp = require('amqplib/callback_api');
var redis = require('redis');

const url = `amqp://${process.env.AMQP_HOST}`;
const queue = process.env.QUEUE_NAME;
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;

var publisher = redis.createClient(redis_port, redis_host);

let channel = null;
amqp.connect(url, function (err, conn) {
  if (!conn) {
    throw new Error(`AMQP connection not available on ${url}`);
  }
  conn.createChannel(function (err, ch) {
    channel = ch;
  });
});

process.on('exit', (code) => {
  channel.close();
  console.log(`Closing`);
});

router.post('/', function (req, res, next) {
  let message = new Buffer.from(req.body.message);
  channel.sendToQueue(queue, message);
  publisher.publish(queue, message);
  res.render('index', { response: `Sent: ${req.body.message}` });
});

module.exports = router;
