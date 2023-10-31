const { Telegraf } = require("telegraf");

const bot = new Telegraf("6322543019:AAFyGO8b3qMCacsqDco8m48GGISIZPb9Ovg"); //a access key for chat bot

//link of chat bot
//https://web.telegram.org/k/#@HemantChatBot

bot.start((ctx) => ctx.reply(`Welcome to Hemant's Chat Bot`)); //reply of /start

bot.command("sticker", (ctx) => ctx.reply("👍")); //reply of all sticker

bot.hears("hi", (ctx) => ctx.reply("Hey there")); //reply for hi

bot.launch();
