const config = require("../config.json")
const lang = require(`../language.${config.language}.js`)
const { decryptMedia } = require("@open-wa/wa-decrypt");
require("colors")

module.exports = {
	name: "sticker",
	aliases: ["st"],
	usage: lang.sticker_usage,
	permissions: 0,

	async run(client, message, sender, perms, prefix, args, content) {
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
				stickerMetadata.removeBackgroundEC = false;
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
		this.sendSticker(client, message, stickerMetadata, videoSettings)
	},

	async sendSticker(client, message, stickerMetadata, videoSettings) {
		var now = Date.now();
		if (message.isMedia && message.type === "image") {
			console.log(lang.sticker_log_request, message.from, "IMAGE1")
			var media = await decryptMedia(message, client.userAgent);
			/*if (stickerMetadata.removeBackgroundEC) {
				img_result = `data:image/jpeg;base64,${media.toString("base64")}`
				media = img_result.url
			}*/
			try {
				await client.sendImageAsSticker(message.from, media, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "IMAGE1", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "IMAGE1", error.red)
			}
		} else if (message.quotedMsgObj && message.quotedMsgObj.type === "image") {
			console.log(lang.sticker_log_request, message.from, "IMAGE2")
			var media = await decryptMedia(message.quotedMsgObj, client.userAgent);
			/*if (stickerMetadata.removeBackgroundEC) {
				img_result = `data:image/jpeg;base64,${media.toString("base64")}`
				media = img_result.url
			}*/
			try {
				await client.sendImageAsSticker(message.from, media, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "IMAGE2", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "IMAGE2", error.red)
			}
		} else if ((message.isMedia || message.isGif) || (message.mimetype === "video/mp4" || message.mimetype === "image/gif") || message.type === "video") {
			console.log(lang.sticker_log_request, message.from, "VIDEO1")
			const mediaData = await decryptMedia(message, client.userAgent);
			if (message.duration > 10) client.reply(message.from, lang.sticker_duration, message.id);
			try {
				await client.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "VIDEO1", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "VIDEO1", error.red)
			}
		} else if ((message.quotedMsgObj) && (message.quotedMsgObj.isMedia || message.quotedMsgObj.isGif || message.quotedMsgObj.mimetype === "video/mp4" || message.quotedMsgObj.mimetype === "image/gif" || message.quotedMsgObj.type === "video")) {
			console.log(lang.sticker_log_request, message.from, "VIDEO2")
			const mediaData = await decryptMedia(message.quotedMsgObj, client.userAgent);
			if (message.quotedMsgObj.duration > 10) client.reply(message.from, lang.sticker_duration, message.id);
			try {
				await client.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, message.from, "VIDEO2", Date.now() - now)
			} catch (error) {
				return console.log(lang.sticker_log_error.red, message.from, "VIDEO2", error.red)
			}
		} else {
			return client.reply(message.from, lang.sticker_no_quote, message.id);
		}
	}
}
