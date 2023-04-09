const fs = require("fs");

module.exports = {
	name: "youtube",
	usage: "ytmp3_usage",
	category: "general",
	aliases: ["ytmp3", "link"],
	permissions: 0,

	async run(client, message, sender, perms, prefix, args, content, lang) {
		try {
			const ytdl = require("ytdl-core");
			const videoURL = args[0];
			var now = Date.now();
			ytdl.getInfo(videoURL).then(async data => {
				if (Number(data.videoDetails.lengthSeconds) > 600) return await client.reply(message.from, lang.ytmp3_too_long, message.id)
				console.log(lang.ytmp3_log_request, sender)
				async function sendIt() {
					await client.sendFile(message.chat.id, message.from.replace("@", "_") + '.mp3', "sound.mp3", "", "", false, true);
					console.log(lang.ytmp3_log_sent, sender, Date.now() - now)
					return;
				}
				const download = ytdl(videoURL, { filter: 'audioonly' });
				const writeStream = fs.createWriteStream(message.from.replace("@", "_") + '.mp3');
				download.pipe(writeStream);
	
				download.on('end', function (info) {
					sendIt();
				})
			}).catch(err => {client.react(message.id, "❌"); console.log(err)})
		} catch(err) { client.react(message.id, "❌"); console.log(err)}
	}
}