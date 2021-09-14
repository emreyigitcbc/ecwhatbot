const whatsapp = require("@open-wa/wa-automate");
const config = require("./config.json")
const lang = require("./language.js")[""+config.language]
whatsapp.create({
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    logConsole: false,
    popup: true,
    qrTimeout: 0,
}).then(bot => {
	console.log(lang.bot_started)
	require('./handler.js')(bot)
	bot.commands = new Map();
	bot.aliases = new Map();
	bot.helps = new Map();
	bot.xox = new Map();
	bot.send = new Map();
	
	bot.onStateChanged(async state => {
        if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
    });
	module.exports = {
		client: bot
	}
});