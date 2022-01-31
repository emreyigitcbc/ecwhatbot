module.exports = {
    name: "watchgroup",
    aliases: ["grupizle"],
    usage: "watchgroup_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            if (!message.isGroupMsg) return;
            if(await client.watchGroup(client.purify(message.from))) return client.reply(message.from, lang.watchgroup_successful, message.id); else return;
        } catch { }
    }
}
