module.exports = {
    name: "setlang",
    aliases: ["dilbelirle"],
    category: "general",
    usage: "setlang_usage",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (args.length > 0) {
                if (client.langs.includes(args[0].toLowerCase())) if (global.db.users.get(sender).setLanguage(args[0].toLowerCase())) return client.reply(message.from, lang.setlang_successful, message.id);
                client.react(message.id, "❌")
            }
        } catch {
            client.react(message.id, "❌")
         }
    }
}
