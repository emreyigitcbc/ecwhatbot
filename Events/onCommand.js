const { client } = require('../index');

client.onAnyMessage(async message => {
	try {
		if (message.isMedia) originalContent = message.caption; else originalContent = message.body
		let prefix = global.db.cache.config.prefix;
		prefix.forEach(async selectedPrefix => {
			let messageContent = originalContent.toLowerCase();
			if (messageContent.includes(selectedPrefix)) {
				try {
				args = messageContent.slice(selectedPrefix.length).trim().split(/ +/g);
				originalContent = originalContent.slice(selectedPrefix.length).trim().split(/ +/g).slice(1).join(" ")
				command = args.shift();
				sender = message.sender.pushname;
				if (client.commands.has(command)) {
					cmd = client.commands.get(command)
					try {
						message.sender.id = client.purify(message.sender.id)
						if(client.cooldown.has(message.sender.id)) return;
						if (!global.db.cache.users.hasOwnProperty(message.sender.id)) await client.createUser(message.sender.id)
						if (message.fromMe) message.from = message.to
						if (message.fromMe) userPerms = 999; else userPerms = await client.getPermissions(message.sender.id);
						if (userPerms == -1) return;
						if (cmd.permissions <= userPerms) {
							if (userPerms != 999) {
								client.cooldown.set(message.sender.id, true)
								setTimeout(() => {
									client.cooldown.delete(message.sender.id)
								}, global.db.cache.config.cooldown * 1000);
							}
							message.chatId = client.purify(message.chatId)
							cmd.run(client, message, message.sender.id, userPerms, selectedPrefix, args, originalContent, require(`../Langs/language.${global.db.cache.users[message.sender.id].language}.js`))
						} else return;
					} catch (err) { console.log(err) }
				} else return;
			} catch (err) { console.log(err)}
			}
		})
	} catch { }
})

module.exports = {
	name: "onCommand"
}