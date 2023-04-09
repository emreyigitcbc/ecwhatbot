const { decryptMedia } = require("@open-wa/wa-decrypt");
require("colors")

module.exports = {
	name: "sticker",
	aliases: ["st"],
	category: "general",
	usage: "sticker_usage",
	permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
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
		this.sendSticker(client, message, sender, stickerMetadata, videoSettings, lang)
	},

	async sendSticker(client, message, sender, stickerMetadata, videoSettings, lang) {
		var now = Date.now();
		if (message.type == "image") {
			console.log(lang.sticker_log_request, sender, "IMAGE1")
			var media = await decryptMedia(message, client.userAgent);
			/*if (stickerMetadata.removeBackgroundEC) {
				img_result = `data:image/jpeg;base64,${media.toString("base64")}`
				media = img_result.url
			}*/
			try {
				await client.sendImageAsSticker(message.from, media, stickerMetadata);
				return console.log(lang.sticker_log_sent, sender, "IMAGE1", Date.now() - now)
			} catch (error) {
				client.react(message.id, "❌")
				return console.log(lang.sticker_log_error.red, sender, "IMAGE1", error)
			}
		} else if (message?.quotedMsgObj?.type == "image") {
			console.log(lang.sticker_log_request, sender, "IMAGE2")
			var media = await decryptMedia(message.quotedMsgObj, client.userAgent);
			/*if (stickerMetadata.removeBackgroundEC) {
				img_result = `data:image/jpeg;base64,${media.toString("base64")}`
				media = img_result.url
			}*/
			try {
				await client.sendImageAsSticker(message.from, media, stickerMetadata);
				return console.log(lang.sticker_log_sent, sender, "IMAGE2", Date.now() - now)
			} catch (error) {
				client.react(message.id, "❌")
				return console.log(lang.sticker_log_error.red, sender, "IMAGE2", error)
			}
		} else if (message.type == "video") {
			console.log(lang.sticker_log_request, sender, "VIDEO1")
			const mediaData = await decryptMedia(message, client.userAgent);
			if (message.duration > 10) client.reply(message.from, lang.sticker_duration, message.id);
			try {
				await client.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, sender, "VIDEO1", Date.now() - now)
			} catch (error) {
				client.react(message.id, "❌")
				return console.log(lang.sticker_log_error.red, sender, "VIDEO1", error)
			}
		} else if (message?.quotedMsgObj?.type == "video") {
			console.log(lang.sticker_log_request, sender, "VIDEO2")
			const mediaData = await decryptMedia(message.quotedMsgObj, client.userAgent);
			if (message.quotedMsgObj.duration > 10) client.reply(sender, lang.sticker_duration, message.id);
			try {
				await client.sendMp4AsSticker(message.from, mediaData, videoSettings, stickerMetadata);
				return console.log(lang.sticker_log_sent, sender, "VIDEO2", Date.now() - now)
			} catch (error) {
				client.react(message.id, "❌")
				return console.log(lang.sticker_log_error.red, sender, "VIDEO2", error)
			}
		} else {
			return client.reply(message.from, lang.sticker_no_quote, message.id);
		}
	}
}
