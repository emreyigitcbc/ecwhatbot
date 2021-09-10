const whatsapp = require("@open-wa/wa-automate");

whatsapp.create().then(bot => {
	require('./handler.js')(bot)
	bot.commands = new Map();
	bot.aliases = new Map();
	bot.onStateChanged(async state => {
        if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
    });
	module.exports = {
		client: bot
	}
});