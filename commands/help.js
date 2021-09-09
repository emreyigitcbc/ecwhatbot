const { prefix } = require("../config.json");

module.exports = {
	name: "yardım",
    description: "Yardım komutu knk.",
	usage: "yardım iste",
	aliases: ["yardim", "yardımed", "help"],
	
	async run(bot, message) {
		{
			return bot.reply(message.from, "Knk yardım alıncak bişi yok mesajı, sticker yapıcaksan emre abi sticker o kadar", message.id);
		}
	}
}
