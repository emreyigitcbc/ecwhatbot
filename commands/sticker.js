const { decryptMedia } = require("@open-wa/wa-decrypt");
const { prefix } = require("../config.json")
require("colors")
const ua = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";
cropPositions = {
	"yukarı": "top",
	"sağyukarı": "right top",
	"sağ": "right",
	"sağaşağı": "right bottom",
	"aşağı": "bottom",
	"solaşağı": "left bottom",
	"sol": "left",
	"solyukarı": "left top",
	"kuzey": "north",
	"kuzeydoğu": "northeast",
	"doğu": "east",
	"güneydoğu": "southeast",
	"güney": "south",
	"güneybatı": "southwest",
	"batı": "west",
	"kuzeybatı": "northwest",
	"merkez": "center",
	"ortala": "centre",
	"entropi": "entropy",
	"dikkat": "attention"
}
module.exports = {
	name: "sticker",
	description: "Converts image/gif/video to sticker.",
	aliases: ["st"],
	cooldown: 2000,
	usage: `Bir resmi/videoyu/gifi alıntılayarak veya göndermeden önce altına yazarak kullanılır.\nAlabileceği argümanlar:\n-koru (Medyanın biçimini korur.)\n-biçim (Medyanın ne tarafını işlemesi gerektiğini belirtir. Alabileceği değerler: "yukarı" | "sağyukarı" | "sağ" | "sağaşağı" | "aşağı" | "solaşağı" | "sol" | "solyukarı" | "kuzey" | "kuzeydoğu" | "doğu" | "güneydoğu" | "güney" | "güneybatı" | "batı" | "kuzeybatı" | "merkez" | "ortala" | "entropi" | "dikkat")\n-dairesel (Medyayı dairesel bir şekilde biçimlendirir.)\nÖrnek kullanım: ${prefix}sticker -koru -dairesel\n${prefix}sticker -koru -biçim yukarı`,

	async run(bot, message, args) {
		stickerMetadata = {
			author: "EC",
			pack: "EC",
			circle: false,
			cropPosition: "attention",
			keepScale: false
		}
		if (args.length > 0) {
			if (args.includes("-dairesel")) {
				stickerMetadata.circle = true;
			}
			if (args.includes("-koru")) {
				stickerMetadata.keepScale = true;
			}
			if (args.includes("-biçim")) {
				i = args.indexOf("-biçim")
				if (Object.keys(cropPositions).indexOf(args[i + 1]) > 0) {
					stickerMetadata.cropPosition = cropPositions[args[i + 1]];
				}
			}
		}
		this.sendSticker(bot, message, stickerMetadata)
	},

	async sendSticker(bot, message, stickerMetadata) {
		var now = Date.now();
		if (message.isMedia && message.type === "image") {
			console.log(`[Sticker] - Sticker requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} (IMAGE1)`)
			const media = await decryptMedia(message, ua);
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, stickerMetadata);
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} sent succesfully. (IMAGE1) (${Date.now() - now}ms)`)
			} catch (error) {
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} threw an error. (IMAGE1)`.red + error)
			}
		} else if (message.quotedMsgObj && message.quotedMsgObj.type === "image") {
			console.log(`[Sticker] - Sticker requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} (IMAGE2)`)
			const media = await decryptMedia(message.quotedMsgObj, ua);
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, stickerMetadata);
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} sent succesfully. (IMAGE2) (${Date.now() - now}ms)`)
			} catch (error) {
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} threw an error. (IMAGE2)`.red + error)
			}
		} else if ((message.isMedia || message.isGif) || (message.mimetype === "video/mp4" || message.mimetype === "image/gif") || message.type === "video") {
			console.log(`[Sticker] - Sticker requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} (VIDEO1)`)
			if (message.duration >= 10) return bot.reply(message.from, "Çko uzun bu video, max 9 sn olucak knk.", message.id);
			const mediaData = await decryptMedia(message, ua);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, {}, stickerMetadata);
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} sent succesfully. (VIDEO1) (${Date.now() - now}ms)`)
			} catch (error) {
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} threw an error. (VIDEO1)`.red + error)
			}
		} else if ((message.quotedMsgObj) && (message.quotedMsgObj.isMedia || message.quotedMsgObj.isGif || message.quotedMsgObj.mimetype === "video/mp4" || message.quotedMsgObj.mimetype === "image/gif" || message.quotedMsgObj.type === "video")) {
			console.log(`[Sticker] - Sticker requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} (VIDEO2)`)
			if (message.quotedMsgObj.duration >= 10) return bot.reply(message.from, "Çko uzun bu video, max 9 sn olucak knk.", message.id);
			const mediaData = await decryptMedia(message.quotedMsgObj, ua);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, {}, stickerMetadata);
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} sent succesfully. (VIDEO2) (${Date.now() - now}ms)`)
			} catch (error) {
				return console.log(`[Sticker] - Sticker that requested by ${message.from.replace("@c.us", "").replace("@g.us", "")} threw an error. (VIDEO2)`.red + error)
			}
		} else {
			return bot.reply(message.from, "Ab bisi alıntılayarak kullan veya fotonun/videonun/gifi atarken altına yaz bu komudu tm mı?  (" + prefix + "yardım sticker)", message.id);
		}
	}
}
