module.exports = {
    name: "permissions",
    aliases: ["perms", "yetkiler", "yetki"],
    category: "moderation",
    usage: "permissions_usage",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 1) {
            if (lang.permissions_set_args.includes(args[0])) {
                try {
                    let permLevel = parseInt(args[2])
                    client.setPermissions(client.purify(message.mentionedJidList[0]), permLevel)
                    return client.reply(message.from, client.format(lang.permissions_successful, permLevel), message.id);
                } catch {}
            } else if (message.mentionedJidList.lenght > 0) {
                perms = client.getPermissions(client.purify(message.mentionedJidList[0]))
                return client.reply(message.from, client.format(lang.permissions_user, perms), message.id);
            } else {
                return client.reply(message.from, lang.permissions_usage, message.id);
            }
        } else {
            return client.reply(message.from, lang.permissions_usage, message.id);
        }
    }
}
