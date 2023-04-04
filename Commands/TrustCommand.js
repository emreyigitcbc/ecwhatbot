module.exports = {
    name: "trust",
    aliases: ["güven"],
    usage: "trust_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 0) {
            for(var i = 0; i < message.mentionedJidList.length; i++){
                id = client.purify(message.mentionedJidList[i])
                global.db.groups.get(message.chatId).setSafeUser(id, true);
            }
            return client.reply(message.from, lang.trust_user_trusted, message.id);
        } else {
            // IF group, trust!
            if(message.isGroupMsg) {
                global.db.groups.get(message.chatId).setSafe(true);
                return client.reply(message.from, lang.trust_group_trusted, message.id);
            } else return client.reply(message.from, lang.trust_usage, message.id);
        }
    }
}
