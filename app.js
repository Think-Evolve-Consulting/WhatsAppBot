const { createBot } = require('whatsapp-cloud-api');
const {apiResponse} = require('./apiresponse');

(async () => {
  try {
    // replace the values below from the values you copied above
    const from = '101332066232852'; // Phone number ID 
    const token = 'EAAIqWOPQq3kBABE982eoeGS7T3T0HPO3RZCqbgUqFs6cq7wl7xjgUhFTbtxZAeFG9BwcbZBLst4COzjCtZA6zQF5dsuJZAu2HTPIZA51NuBdK4N8yZBRJqoJfNP7kDyN6C2A5Xwex5sUHRHSLO1dC7El7HIU31ezeoqWaEZA4GBSQaiGnwGVwqTgitdMZCMYZBvsGL5ZAaDKOM2RZAlwDHIlYZAVvZBqDKfmzosREZD'; // Temporary access token
    const to = '8801785748248'; // your phone number without the leading '+'
    const webhookVerifyToken = 'd286a30eb7a837ce174ca15be9504565e005b879853346bf511e4128a10b54b3'; // use a random value, e.g. 'bju#hfre@iu!e87328eiekjnfw'

    const bot = createBot(from, token);

    const result = await bot.sendText(to, 'Responding from whatsapp cloud api.');

    // Start express server to listen for incoming messages
    await bot.startExpressServer({
      webhookVerifyToken,
    });

    // Listen to ALL incoming messages
    bot.on('message', async (msg) => {
      console.log(msg);

      const message = await apiResponse(msg);

      if (msg.type === 'text') {
        await bot.sendText(msg.from, "Received your text message!");
      } else if (msg.type === 'image') {
        await bot.sendText(msg.from, 'Received your image!');
      }
    });
  } catch (err) {
    console.log(err);
  }
})();