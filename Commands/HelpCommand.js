module.exports = {
	name: "help",
	aliases: ["yardim", "yardım"],
	category: "general",
	usage: "help_usage",
	permissions: 0,

	async run(client, message, sender, perms, prefix, args, content, lang) {
		if (args.length > 0) {
			if(client.commands.has(args[0].toLowerCase())) {
				usage = lang[client.commands.get(args[0].toLowerCase()).usage];
				return client.reply(message.from, client.format(usage, prefix), message.id)
			}
		} else {
			a = ""
			Object.keys(client.commands_list).forEach((key, index) => {
				if(key == "dontshow") return;
				a = a + "*" + lang.categories[key] + "*\n"
				a = a + client.commands_list[key].join(", ") + "\n"
			})
			return client.reply(message.from, client.format(lang.help, a, prefix), message.id);
		}
	}
}
