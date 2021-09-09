const { prefix } = require("../config.json");
const { decryptMedia } = require("@open-wa/wa-decrypt");
const uaOverride = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";

module.exports = {
	name: "sticker",
    description: "Resim veya videoyu stickere çevirir.",
	usage: "Bir içeriğin altına '"+prefix+"sticker' yazarak veya içeriği alıntılayarak kullanılır.",
	aliases: [],
	
	async run(bot, message) {
		const now = Date.now();
		if (message.isMedia && message.type === "image") {
			const media = await decryptMedia(message, uaOverride);
			await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, {
					author: "EC",
					pack: "EC"
			});
			return console.log(`[DEBUG] Sticker ${Date.now() - now}ms sürede yapıldı.`);
		} else if (message.quotedMsgObj && message.quotedMsgObj.type === "image") {
			const media = await decryptMedia(message.quotedMsgObj, uaOverride);
			await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, {
					author: "EC",
					pack: "EC"
			});
			return console.log(`[DEBUG] Sticker ${Date.now() - now}ms sürede yapıldı.`);
		} else if ((message.isMedia || message.isGif) || (message.mimetype === "video/mp4" || message.mimetype === "image/gif") || message.type === "video") {
			if (message.duration >= 10) return bot.reply(message.from, "cko uzun bu video, max 10 sn olucak knk", message.id);
			const mediaData = await decryptMedia(message, uaOverride);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, {}, {
					author: "EC",
					pack: "EC"
				});
				return console.log(`[DEBUG] Sticker ${Date.now() - now}ms sürede yapıldı.`);
			} catch (error) {
				return bot.reply(message.from, "hata verdim knk", message.id);
			}
		} else {
			return bot.reply(message.from, "ab bisi alıntıla veya fotonun/videonun/gifin altına yaz", message.id);
		}
	}
}
