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
				usage_args = client.commands.get(args[0].toLowerCase())?.usage_data || [];
				var temp_string = client.format(usage, prefix);
				for(var i = 0; i < usage_args.length; i++) {
					temp_string = client.format(temp_string, usage_args[i])
				}
				return client.reply(message.from, temp_string, message.id)
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
