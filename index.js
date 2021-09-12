const whatsapp = require("@open-wa/wa-automate");

whatsapp.create({
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    logConsole: false,
    popup: true,
    qrTimeout: 0,
}).then(bot => {
	console.log("BOT STARTED SUCCESFULLY. NOW WILL LOAD EVENTS AND COMMANDS.")
	require('./handler.js')(bot)
	bot.commands = new Map();
	bot.aliases = new Map();
	bot.cooldowns = new Map();
	bot.helps = new Map();
	bot.xox = new Map();
	bot.onStateChanged(async state => {
        if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
    });
	module.exports = {
		client: bot
	}
});