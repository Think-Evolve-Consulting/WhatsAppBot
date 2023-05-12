
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const from = '101332066232852';
const token = 'EAAIqWOPQq3kBABE982eoeGS7T3T0HPO3RZCqbgUqFs6cq7wl7xjgUhFTbtxZAeFG9BwcbZBLst4COzjCtZA6zQF5dsuJZAu2HTPIZA51NuBdK4N8yZBRJqoJfNP7kDyN6C2A5Xwex5sUHRHSLO1dC7El7HIU31ezeoqWaEZA4GBSQaiGnwGVwqTgitdMZCMYZBvsGL5ZAaDKOM2RZAlwDHIlYZAVvZBqDKfmzosREZD';
const to = '8801785748248'; // your phone number without the leading '+'
const webhookVerifyToken = 'd286a30eb7a837ce174ca15be9504565e005b879853346bf511e4128a10b54b3';


const bot = createBot(from, token);


bot.on('message', async (msg) => {
    console.log(msg);

    if (msg.type === 'text') {
      await bot.sendText(msg.from, 'Received your text message!');
    } else if (msg.type === 'image') {
      await bot.sendText(msg.from, 'Received your image!');
    }
  })







app.get('/', (req, res) => {
  res.send('Whatsapp Cloud Server is Running.....')
})















app.listen(port, () => {
  console.log(`Whatsapp Cloud Server is listening on port ${port}`)
})