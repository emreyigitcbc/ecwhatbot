const { client } = require('../index');

client.onAnyMessage(async message => {
	try {
		var content = "";
		// Unsupported message types
		if (message.type == "gp2" || message.type == "buttons_response" || message.type == "document" || message.type == "revoked" || message.type == "ptt" || message.type == "location" || message.type == "sticker" || message.type == "unknown" || message.type == "vcard" || message.type == "multi_vcard") return;
		// Supported message types
		if (message.type == "chat") content = message.body;
		if (message.type == "image" || message.type == "video") content = message.caption || "";
		if (content == "") return;
		global.db.client.prefix.split(",").forEach(async selectedPrefix => {
			if (content.includes(selectedPrefix)) {
				try {
				args = content.slice(selectedPrefix.length).trim().split(/ +/g);
				content = content.slice(selectedPrefix.length).trim().split(/ +/g).slice(1).join(" ")
				command = args.shift().toLowerCase();
				if (client.commands.has(command)) {
					cmd = client.commands.get(command)
					try {
						message.sender.cleanId = client.purify(message.sender.id); // Clearing the ID (replaces @g.us, @c.us, etc.)
						message.cleanChatId = client.purify(message.chatId)
						if (client.cooldown.has(message.sender.cleanId)) return; // Check for cooldown
						global.db.users.create(message.sender.cleanId, message.sender.pushname)
						if(message.isGroupMsg) {
							global.db.groups.create(message.cleanChatId)
							if(!global.db.groups.get(message.cleanChatId).safe) if(!message.fromMe && !global.db.groups.get(message.cleanChatId).safe_users.includes(message.sender.cleanId)) return;
						}
						let userPerms = global.db.users.get(message.sender.cleanId).permissions;
						if (message.fromMe){
							message.from = message.to
							userPerms = 10
						}
						if (userPerms == -1) return;
						// If user has permissions, run command!
						if (cmd.permissions <= userPerms || message.fromMe) {
							// 10 - admin
							if (userPerms != 10 && !message.fromMe) {
								client.cooldown.set(message.sender.cleanId, true)
								setTimeout(() => {
									client.cooldown.delete(message.sender.cleanId)
								}, global.db.client.cooldown * 1000);
							}
							cmd.run(client, message, message.sender.cleanId, userPerms, selectedPrefix, args, content, require(`../Langs/language.${global.db.users.get(message.sender.cleanId).language}.js`))
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