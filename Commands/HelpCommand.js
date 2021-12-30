const config = require("../config.json")
const lang = require(`../language.${config.language}.js`)

module.exports = {
	name: "help",
	aliases: ["yardim", "yardım", "?"],
	usage: ":D?",
	permissions: 0,

	async run(client, message, sender, perms, prefix, args, content) {
		m = lang.help
		if (args.length > 0) {
			if (client.helps.has(args[0])) {
				return client.reply(message.from, client.helps.get(args[0]), message.id);
			}
		} else {
			a = []
			m.forEach(e => a.push(client.format(e, prefix)))
			return client.reply(message.from, a.join("\n"), message.id);
		}
	}
}
