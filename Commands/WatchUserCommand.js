module.exports = {
    name: "watchuser",
    aliases: ["adamizle"],
    usage: "watchuser_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (message.isGroupMsg) {
                if (message.mentionedJidList.length > 0) {
                    user = client.purify(message.mentionedJidList[0])
                    if (await client.watchUserGroup(user)) return client.reply(message.from, lang.watchuser_group_successful, message.id); else return;
                }
            } else {
                if (await client.watchUserPriv(client.purify(message.to))) return client.reply(message.from, lang.watchuser_priv_successful, message.id); else return;
            }
        } catch { }
    }
}
