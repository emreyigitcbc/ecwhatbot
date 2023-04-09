module.exports = {
    name: "unwatch",
    aliases: ["takipetme", "unlisten", "izleme"],
    usage: "unwatch_usage",
    category: "owner",
    permissions: 11,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (message.isGroupMsg) {
            global.db.groups.create(message.chatId)
            if (args.length > 0) {
                if (message?.mentionedJidList?.length > 0) {
                    for (var i = 0; i < message.mentionedJidList.length; i++) {
                        id = client.purify(message.mentionedJidList[i])
                        global.db.groups.get(message.chatId).setWatchingUser(id, false);
                    }
                    global.db.groups.get(message.chatId).setWatching(false);
                    return client.react(message.id, "✅")
                } else {
                    var user = args[0];
                    global.db.groups.get(message.chatId).setWatchingUser(user, false);
                    global.db.groups.get(message.chatId).setWatching(false);
                    return client.react(message.id, "✅")
                }
            } else {
                global.db.groups.get(message.chatId).setWatchingUser("EVERYONE", false);
                global.db.groups.get(message.chatId).setWatching(false);
                return client.react(message.id, "✅")
            }
        } else if (!message.isGroupMsg) {
            global.db.users.create(message.from)
            global.db.users.create(message.to)
            if (args.length > 0) {
                var user = args[0];
                global.db.users.get(client.purify(user)).setWatching(false);
                return client.react(message.id, "✅")
            } else {
                var user = message.to;
                global.db.users.get(client.purify(user)).setWatching(false);
                return client.react(message.id, "✅")
            }
        } else {
            client.react(message.id, "❌")
        }
    }
}
