module.exports = {
    name: "botunban",
    aliases: ["adminunban"],
    category: "moderation",
    usage: "adminunban_usage",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (message.mentionedJidList.length > 0) {
            try {
                global.db.users.create(message.mentionedJidList[0]);
                global.db.users.get(client.purify(message.mentionedJidList[0])).setPermissions(0)
                return client.reply(message.from, lang.adminunban_successful, message.id);
            } catch {client.react(message.id, "❌") }
        } else if(!message.isGroupMsg){
            try {
                global.db.users.create(message.to);
                global.db.users.get(client.purify(message.to)).setPermissions(0)
                return client.reply(message.from, lang.adminunban_successful, message.id);
            } catch {client.react(message.id, "❌") }
        } else {
            return client.reply(message.from, lang.adminunban_usage, message.id);
        }
    }
}
