module.exports = {
    name: "unwatchuser",
    aliases: ["adamizleme"],
    usage: "unwatchuser_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (message.isGroupMsg) {
                if (message.mentionedJidList.length > 0) {
                    user = client.purify(message.mentionedJidList[0])
                    if (await client.unWatchUserGroup(user)) client.reply(message.from, lang.unwatchuser_group_successful, message.id); else return;
                }
            } else {
                if (await client.unWatchUserPriv(client.purify(message.to))) client.reply(message.from, lang.unwatchuser_priv_successful, message.id); else return;
            }
        } catch { }
    }
}
