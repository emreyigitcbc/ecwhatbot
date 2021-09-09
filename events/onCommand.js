const { prefix }= require("../config.json")
const { client } = require('../index');
client.onMessage(async message => {
	try {
		if (message.body.startsWith(prefix)) {
            args = message.body.slice(prefix.length).trim().split(/ +/g);
            command = args.shift().toLowerCase();
            sender = message.sender.pushname;
        } else if (message.caption.startsWith(prefix)) {
            args = message.caption.slice(prefix.length).trim().split(/ +/g);
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
				cmd.run(client, message, args);
			} catch {

            }
        }
	} catch {}
})

module.exports = {
	name: "onCommand",
	description: "Komut girildiginde."
}