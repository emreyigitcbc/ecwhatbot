const config = require("../config.json")
const lang = require("../language.js")[config.language]
const tdk = require('trsozluk')
const util = require("util")

module.exports = {
    name: "tdk",
    usage: lang.tdk_usage,
    aliases: [],

    async run(bot, message, args) {
        try {
            const kelime = args[0];
            const sonuc = await tdk(kelime);
            if (!sonuc.anlam) throw "Hataa"
            await bot.reply(message.from, sonuc.anlam, message.id)
        } catch (err){
            await bot.reply(message.from, lang.dict_not_found, message.id)
        }
	}
}