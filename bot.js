const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const TOKEN = '8051392949:AAFhvBmejUawfdCBjAahgKue3TPxAVH06CU';

const bot = new Telegraf(TOKEN);
const web_link = 'https://671396d0c5a1568f5549f3fa--flourishing-gnome-043c14.netlify.app/';

// Start command with the web app button
bot.start((ctx) => {
  ctx.reply('Welcome To DIY Shopping', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Web App', web_app: { url: web_link } }]
      ]
    }
  });
});

// Launch the bot
bot.launch();

// Gracefully stop the bot on process termination
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
