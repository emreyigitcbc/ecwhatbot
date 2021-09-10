const { decryptMedia } = require("@open-wa/wa-decrypt");
const ua = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";

module.exports = {
	name: "sticker",
	description: "Converts image/gif/video to sticker.",
	aliases: [],

	async run(bot, message, perms, args) {
		if (message.isMedia && message.type === "image") {
			console.log("[Sticker] - Sticker requested. (IMAGE1)")
			const media = await decryptMedia(message, ua);
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, {
					author: "EC",
					pack: "EC"
				});
				console.log("[Sticker] - Sticker sent. (IMAGE1)")
			} catch (error) {
				console.log("[Sticker] - Sticker error. (IMAGE1)" + error)
				return bot.reply(message.from, "Hata verdim knk :D", message.id);
			}
		} else if (message.quotedMsgObj && message.quotedMsgObj.type === "image") {
			console.log("[Sticker] - Sticker requested. (IMAGE2)")
			const media = await decryptMedia(message.quotedMsgObj, ua);
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, {
					author: "EC",
					pack: "EC"
				});
				console.log("[Sticker] - Sticker sent. (IMAGE2)")
			} catch (error) {
				console.log("[Sticker] - Sticker error. (IMAGE2)" + error)
				return bot.reply(message.from, "Hata verdim knk :D", message.id);
			}
		} else if ((message.isMedia || message.isGif) || (message.mimetype === "video/mp4" || message.mimetype === "image/gif") || message.type === "video") {
			console.log("[Sticker] - Sticker requested. (VIDEO1)")
			if (message.duration >= 10) return bot.reply(message.from, "Çko uzun bu video, max 9 sn olucak knk.", message.id);
			const mediaData = await decryptMedia(message, ua);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, {}, {
					author: "EC",
					pack: "EC"
				});
				console.log("[Sticker] - Sticker sent. (VIDEO1)")
			} catch (error) {
				console.log("[Sticker] - Sticker error. (VIDEO1)" + error)
				return bot.reply(message.from, "Hata verdim knk :D", message.id);
			}
		} else if ((message.quotedMsgObj) && (message.quotedMsgObj.isMedia || message.quotedMsgObj.isGif || message.quotedMsgObj.mimetype === "video/mp4" || message.quotedMsgObj.mimetype === "image/gif" || message.quotedMsgObj.type === "video")) {
			console.log("[Sticker] - Sticker requested. (VIDEO2)")
			if (message.quotedMsgObj.duration >= 10) return bot.reply(message.from, "Çko uzun bu video, max 9 sn olucak knk.", message.id);
			const mediaData = await decryptMedia(message.quotedMsgObj, ua);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, {}, {
					author: "EC",
					pack: "EC"
				});
				console.log("[Sticker] - Sticker sent. (VIDEO2)")
			} catch (error) {
				console.log("[Sticker] - Sticker error. (VIDEO2)" + error)
				return bot.reply(message.from, "Hata verdim knk :D", message.id);
			}
		} else {
			return bot.reply(message.from, "Ab bisi alıntılayarak kullan veya fotonun/videonun/gifi atarken altına yaz bu komudu tm mı?", message.id);
		}
	}
}
