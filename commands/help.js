const { prefix } = require("../config.json");

module.exports = {
	name: "yardım",
	description: "Help page.",
	aliases: ["yardim", "yardımed", "help", "?"],
	cooldown: 1000,
	usage: ":D?",

	async run(bot, message, args) {
		m = [
			`*Emre Cebeci Bot*`,
			`Yardım Sayfası\n`,
			`*1-* _${prefix}sticker_ : Atılan/alıntılanan resmi/videoyu/gifi stickere çevirir. (VİDEO/GİF MAX 9 SANİYE OLUCAK)`,
			`*2-* _${prefix}ban @kullanıcı_ : Etiketlenen kişiyi gruptan atar. (Kullanan kişinin ve benim yetkim olması gerek)`,
			`\nKomutlar hakkında detaylı bilgi için: ${prefix}yardım <komut>`,
			`\nBotu kullandığınız için tşkler :wink:`
		]
		if (args.length > 0) {
			if (bot.helps.has(args[0])) {
				return bot.reply(message.from, bot.helps.get(args[0]), message.id);
			}
		} else {
			return bot.reply(message.from, m.join("\n"), message.id);
		}
	}
}
