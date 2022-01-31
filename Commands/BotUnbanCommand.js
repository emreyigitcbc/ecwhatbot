module.exports = {
    name: "botunban",
    aliases: ["adminunban"],
    category: "moderation",
    usage: "adminunban_usage",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (message.mentionedJidList.length > 0) {
            try {
                client.setPermissions(client.purify(message.mentionedJidList[0]), 0)
                return client.reply(message.from, lang.adminunban_successful, message.id);
            } catch { }
        } else {
            return client.reply(message.from, lang.adminunban_usage, message.id);
        }
    }
}
