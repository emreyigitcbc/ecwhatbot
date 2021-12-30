const { prefix } = require("../config.json")
const { client } = require('../index');

client.onAnyMessage(async message => {
	try {
		if (message.isMedia) messageContent = message.caption.toLowerCase(); else messageContent = message.body.toLowerCase();
		prefix.forEach(selectedPrefix => {
			if (messageContent.includes(selectedPrefix)) {
				args = messageContent.slice(selectedPrefix.length).trim().split(/ +/g);
				command = args.shift();
				sender = message.sender.pushname;
				if (client.commands.has(command)) {
					cmd = client.commands.get(command)
				} else {
					cmd = client.commands.get(client.aliases.get(command));
				}
				if (cmd) {
					try {
						if (message.fromMe) message.from = message.to
						if (message.fromMe) userPerms = 999; else userPerms = client.getPermissions(message.sender.id);
						if (cmd.permissions <= userPerms) {
							cmd.run(client, message, message.sender.id, userPerms, selectedPrefix, args, messageContent)
						 } else return;
					} catch(err) { return console.log(err) }
				} else return;
			}
		})
	} catch { }
})

module.exports = {
	name: "onCommand"
}