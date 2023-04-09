module.exports = {
    name: "untrust",
    aliases: ["güvenme"],
    usage: "untrust_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 0) {
            for(var i = 0; i < message.mentionedJidList.length; i++){
                id = client.purify(message.mentionedJidList[i])
                global.db.groups.get(message.chatId).setSafeUser(id, false);
            }
            return client.reply(message.from, lang.untrust_user_untrusted, message.id);
        } else {
            // IF group, untrust!
            if(message.isGroupMsg) {
                global.db.groups.get(message.chatId).setSafe(false);
                return client.reply(message.from, lang.untrust_group_untrusted, message.id);
            } else return client.reply(message.from, lang.untrust_usage, message.id);
        }
    }
}
