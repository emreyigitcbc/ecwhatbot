const { prefix, prefixes, permissions } = require("../config.json")
const { client } = require('../index');
client.onAnyMessage(async message => {
	try {
		selectedprefix = null;
		if (message.isMedia) msg = message.caption.toLowerCase(); else msg = message.body.toLowerCase();
		if (msg.startsWith(prefix)) {
			selectedprefix = prefix;
		} else {
			prefixes.some(element => {
				if (msg.includes(element)) {
					selectedprefix = element;
					return true;
				}
			})
			if (!selectedprefix) return;
		}
		if (selectedprefix) {
			args = msg.slice(selectedprefix.length).trim().split(/ +/g);
			command = args.shift().toLowerCase();
			sender = message.sender.pushname;
		} else return;

		if (client.commands.has(command)) {
			cmd = client.commands.get(command)
		} else {
			cmd = client.commands.get(client.aliases.get(command));
		}
		if (cmd) {
			try {
				perms = ""
				if (message.fromMe) message.from = message.to
				cmd.run(client, message, perms, args);
			} catch { }
		}
	} catch { }
})

module.exports = {
	name: "onCommand",
	description: "Command trigger event"
}