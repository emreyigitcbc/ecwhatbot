module.exports = {
    name: "unwatchgroup",
    aliases: ["grupizleme"],
    usage: "unwatchgroup_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (!message.isGroupMsg) return;
            if(await client.unWatchGroup(client.purify(message.from))) return client.reply(message.from, lang.unwatchgroup_successful, message.id); else return;
        } catch { }
    }
}
