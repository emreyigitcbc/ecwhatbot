module.exports = {
    name: "permissions",
    aliases: ["perms", "yetkiler", "yetki"],
    category: "moderation",
    usage: "permissions_usage",
    permissions: 1,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 1) {
            if (lang.permissions_set_args.includes(args[0])) {
                try {
                    let permLevel = parseInt(args[2])
                    if (permLevel == -1) return;
                    if (permLevel >= perms) return client.reply(message.from, client.format(lang.permissions_failed, permLevel, perms), message.id);
                    global.db.users.get(client.purify(message.mentionedJidList[0])).setPermissions(permLevel)
                    return client.reply(message.from, client.format(lang.permissions_successful, permLevel), message.id);
                } catch {
                    client.react(message.id, "❌")
                 }
            } else if (message.mentionedJidList.lenght > 0) {
                perms = global.db.users.get(client.purify(message.mentionedJidList[0])).permissions
                return client.reply(message.from, client.format(lang.permissions_user, perms), message.id);
            } else {
                return client.reply(message.from, lang.permissions_usage, message.id);
            }
        } else if (!message.isGroupMsg) {
            let permLevel = parseInt(args[0])
            if (permLevel == -1) return;
            if (permLevel >= perms) return client.reply(message.from, client.format(lang.permissions_failed, permLevel, perms), message.id);
            global.db.users.get(client.purify(message.to)).setPermissions(permLevel)
            return client.reply(message.from, client.format(lang.permissions_successful, permLevel), message.id);
        } else {
            return client.reply(message.from, lang.permissions_usage, message.id);
        }
    }
}
