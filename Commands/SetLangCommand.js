module.exports = {
    name: "setlang",
    aliases: ["dilbelirle"],
    category: "general",
    usage: "setlang_usage",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (args.length > 0){
                if (client.langs.includes(args[0].toLowerCase())) if(await client.setUserLanguage(sender, args[0].toLowerCase()))  client.reply(message.from, lang.setlang_successful, message.id);
            }
        } catch { }
    }
}
