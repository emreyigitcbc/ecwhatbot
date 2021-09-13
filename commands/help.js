const config = require("../config.json")
const lang = require("../language.js")[config.language]
const { prefix } = require("../config.json");

module.exports = {
	name: "help",
	aliases: ["yardim", "yardım", "?"],
	usage: ":D?",

	async run(bot, message, args) {
		m = lang.help
		if (args.length > 0) {
			if (bot.helps.has(args[0])) {
				return bot.reply(message.from, bot.helps.get(args[0]), message.id);
			}
		} else {
			return bot.reply(message.from, m.join("\n"), message.id);
		}
	}
}
