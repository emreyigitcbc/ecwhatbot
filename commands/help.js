const { prefix } = require("../config.json");

module.exports = {
	name: "yardım",
    description: "Help page.",
	aliases: ["yardim", "yardımed", "help"],
	
	async run(bot, message, perms, args) {
		{
			return bot.reply(message.from, `*Emre Cebeci Bot*\nYardım Sayfası\n*1-* _${prefix}sticker_ : Atılan/alıntılanan resmi/videoyu/gifi stickere çevirir. (VİDEO/GİF MAX 9 SANİYE OLUCAK)\n*2-* _${prefix}sss_ : biseler\n\nBotu kullandığın için tşk`, message.id);
		}
	}
}
