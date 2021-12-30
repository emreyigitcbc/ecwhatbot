const whatsapp = require("@open-wa/wa-automate");
const config = require("./config.json")
const lang = require(`./language.${config.language}.js`)
const functions = require("./Functions")

whatsapp.create({
	blockCrashLogs: true,
	disableSpins: true,
	headless: true,
	logConsole: false,
	popup: true,
	qrTimeout: 0
}).then(bot => {
	console.log(lang.bot_started)
	require('./handler.js')(bot)
	/* Setting Up Bot Objects and Variables Globally */
	bot.commands = new Map();
	bot.aliases = new Map();
	bot.helps = new Map();
	bot.xox = new Map();
	bot.send = new Map();
	bot.userAgent = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
	/* Declaring Global Bot Functions */
	bot = Object.assign(bot, functions)
	
	module.exports = {
		client: bot
	}
});