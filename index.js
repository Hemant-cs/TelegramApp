const { Telegraf } = require("telegraf");

const bot = new Telegraf("6322543019:AAFyGO8b3qMCacsqDco8m48GGISIZPb9Ovg");

bot.start((ctx) => ctx.reply(`Welcome to Hemant's Chat Bot`));

bot.command("sticker", (ctx) => ctx.reply("👍"));

bot.hears("hi", (ctx) => ctx.reply("Hey there"));

bot.launch();
