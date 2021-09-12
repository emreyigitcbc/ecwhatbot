const ytdl = require("ytdl-core");
const fs = require("fs");

module.exports = {
	name: "link",
	description: "Downloads yt video and sends as audio.",
	usage: "link <youtube adresi> (max 8dk)",
	cooldown: 20000,
	aliases: ["ytmp3", "mp3"],

	async run(bot, message, args) {
		const videoURL = args[0];
		var now = Date.now();
		const data = await ytdl.getInfo(videoURL)
		if (Number(data.videoDetails.lengthSeconds) > 8*60) return await bot.reply(message.from, "Lütfen 8 dakikadan kısa bir video belirt :(", message.id)
		console.log(`[YTMP3] - Video to audio conversion requested by ${message.from.replace("@c.us", "").replace("@g.us", "")}`)
		async function gonder() {
			await bot.sendFile(message.from, message.from.replace("@", "_")+'.mp3', "audio", "audio", null, false, true, false, false);
			console.log(`[YTMP3] - Video to audio conversion request by ${message.from.replace("@c.us", "").replace("@g.us", "")} sent succesfully. (${Date.now() - now})`)
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