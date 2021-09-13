const config = require("../config.json")
const lang = require("../language.js")["" + config.language]
const { decryptMedia } = require("@open-wa/wa-decrypt");
const { removeBackgroundFromImageBase64 } = require("remove.bg")
const apiKey = "hLXNrbVytvmSNY26gLMhtkYb"
require("colors")
const ua = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";

module.exports = {
	name: "sticker",
	aliases: ["st"],
	usage: lang.sticker_usage,

	async run(bot, message, args) {
		stickerMetadata = {
			author: "EC",
			pack: "EC",
			circle: false,
			cropPosition: "attention",
			keepScale: false,
			removeBackgroundEC: false
		}
		videoSettings = {
			crop: true,
			endTime: "00:00:08.00",
			fps: 10,
			square: 512,
			startTime: "00:00:00.00"
		}
		if (args.length > 0) {
			if (args.includes(lang.sticker_args[0])) {
				stickerMetadata.circle = true;
			}
			if (args.includes(lang.sticker_args[1])) {
				stickerMetadata.keepScale = true;
			}
			if (args.includes(lang.sticker_args[2])) {
				stickerMetadata.removeBackgroundEC = true;
			}
			if (args.includes(lang.sticker_args[3])) {
				i = args.indexOf(lang.sticker_args[3])
				if (Object.keys(lang.sticker_cropPositions).indexOf(args[i + 1]) > 0) {
					stickerMetadata.cropPosition = lang.sticker_cropPositions[args[i + 1]];
				}
			}
			if (args.includes(lang.sticker_args[4])) {
				i = args.indexOf(lang.sticker_args[4])
				if (args[i + 1]) videoSettings.startTime = "00:" + args[i + 1] + ".00"
			}
			if (args.includes(lang.sticker_args[5])) {
				i = args.indexOf(lang.sticker_args[5])
				if (args[i + 1]) videoSettings.endTime = "00:" + args[i + 1] + ".00"
			}
			if (args.includes(lang.sticker_args[6])) {
				i = args.indexOf(lang.sticker_args[6])
				if (args[i + 1]) videoSettings.square = parseInt(args[i + 1])
			}
			if (args.includes(lang.sticker_args[7])) {
				i = args.indexOf(lang.sticker_args[7])
				if (args[i + 1]) videoSettings.fps = parseInt(args[i + 1])
			}
			if (args.includes(lang.sticker_args[8])) {
				videoSettings.crop = false
			}
		}
		this.sendSticker(bot, message, stickerMetadata, videoSettings)
	},

	async sendSticker(bot, message, stickerMetadata, videoSettings) {
		var now = Date.now();
		if (message.isMedia && message.type === "image") {
			console.log(lang.sticker_log_request, message.from, "IMAGE1")
			var media = await decryptMedia(message, ua);
			if (stickerMetadata.removeBackgroundEC) {
				img_result = await removeBackgroundFromImageBase64({
					base64img: `data:image/jpeg;base64,${media.toString("base64")}`,
					apiKey: apiKey,
					size: "regular",
					type: "product"
				})
				media = img_result.base64img
			}
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "IMAGE1", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "IMAGE1", error.red)
			}
		} else if (message.quotedMsgObj && message.quotedMsgObj.type === "image") {
			console.log(lang.sticker_log_request, message.from, "IMAGE2")
			var media = await decryptMedia(message.quotedMsgObj, ua);
			if (stickerMetadata.removeBackgroundEC) {
				img_result = await removeBackgroundFromImageBase64({
					base64img: `data:image/jpeg;base64,${media.toString("base64")}`,
					apiKey: apiKey,
					size: "regular",
					type: "product"
				})
				media = img_result.base64img
			}
			try {
				await bot.sendImageAsSticker(message.from, `data:image/jpeg;base64,${media.toString("base64")}`, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "IMAGE2", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "IMAGE2", error.red)
			}
		} else if ((message.isMedia || message.isGif) || (message.mimetype === "video/mp4" || message.mimetype === "image/gif") || message.type === "video") {
			console.log(lang.sticker_log_request, message.from, "VIDEO1")
			const mediaData = await decryptMedia(message, ua);
			if (message.duration > 10) bot.reply(message.from, lang.sticker_duration, message.id);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "VIDEO1", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "VIDEO1", error.red)
			}
		} else if ((message.quotedMsgObj) && (message.quotedMsgObj.isMedia || message.quotedMsgObj.isGif || message.quotedMsgObj.mimetype === "video/mp4" || message.quotedMsgObj.mimetype === "image/gif" || message.quotedMsgObj.type === "video")) {
			console.log(lang.sticker_log_request, message.from, "VIDEO2")
			const mediaData = await decryptMedia(message.quotedMsgObj, ua);
			if (message.quotedMsgObj.duration > 10) bot.reply(message.from, lang.sticker_duration, message.id);
			try {
				await bot.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "VIDEO2", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "VIDEO2", error.red)
			}
		} else {
			return bot.reply(message.from, lang.sticker_no_quote, message.id);
		}
	}
}
