const Telegraf = require('telegraf');
console.log(process.env.BOT_TOKEN);
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('subscribe', (ctx) => {
    console.log(ctx.update.message);
    return ctx.reply('Hello')
});
bot.command('modern', ({reply}) => reply('Yo'));
bot.command('hipster', Telegraf.reply('λ'));

bot.launch();
