module.exports = {
    name: "botban",
    aliases: ["adminban"],
    category: "moderation",
    usage: "adminban_usage",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (message.mentionedJidList.length > 0) {
            try {
                client.setPermissions(client.purify(message.mentionedJidList[0]), -1)
                return client.reply(message.from, lang.adminban_successful, message.id);
            } catch { }
        } else {
            return client.reply(message.from, lang.adminban_usage, message.id);
        }
    }
}
