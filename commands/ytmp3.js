const config = require("../config.json")
const lang = require("../language.js")[""+config.language]
const ytdl = require("ytdl-core");
const fs = require("fs");

module.exports = {
	name: "link",
	usage: lang.ytmp3_usage,
	aliases: ["ytmp3", "mp3"],

	async run(bot, message, args) {
		const videoURL = args[0];
		var now = Date.now();
		const data = await ytdl.getInfo(videoURL)
		if (Number(data.videoDetails.lengthSeconds) > 10*60) return await bot.reply(message.from, lang.ytmp3_too_long, message.id)
		console.log(lang.ytmp3_log_request, message.sender.id)
		async function gonder() {
			await bot.sendFile(message.from, message.from.replace("@", "_")+'.mp3', "audio", "audio", null, false, true, false, false);
			console.log(lang.ytmp3_log_request, message.sender.id, Date.now() - now)
			return;
		}
		const download = ytdl(videoURL, { filter: 'audioonly' });
		const writeStream = fs.createWriteStream(message.from.replace("@", "_")+'.mp3');
		download.pipe(writeStream);

		download.on('end', function (info) {
			gonder();
		})
	}
}