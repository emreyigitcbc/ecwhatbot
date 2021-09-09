const prefix = require("./config.json").prefix;
const whatsapp = require("@open-wa/wa-automate");
const fs = require("fs");
const Discord = require("discord.js")

whatsapp.create().then(bot => {
	require('./handler.js')(bot)
	bot.commands = new Discord.Collection();
	bot.aliases = new Discord.Collection();
	bot.onStateChanged(async state => {
        if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
    });
	module.exports = {
		client: bot
	}
});