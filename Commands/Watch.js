module.exports = {
    name: "watch",
    aliases: ["takipet", "listen", "izle"],
    usage: "watch_usage",
    category: "owner",
    permissions: 11,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (message.isGroupMsg) {
            global.db.groups.create(message.chatId)
            if (args.length > 0) {
                if (message?.mentionedJidList?.length > 0) {
                    for (var i = 0; i < message.mentionedJidList.length; i++) {
                        id = client.purify(message.mentionedJidList[i])
                        global.db.groups.get(message.chatId).setWatchingUser(id, true);
                    }
                    if(content.includes("@c.us") || content.includes("@g.us")) {
                        global.db.groups.get(message.chatId).setWatchLog(args[args.length-1]);
                    }
                    global.db.groups.get(message.chatId).setWatching(true);
                    return client.react(message.id, "✅")
                } else {
                    var user = args[0];
                    var channel = message.chatId;
                    if(content.includes("@c.us") || content.includes("@g.us")) {
                        channel = args[args.length-1];
                    }
                    if (channel == user) user = "EVERYONE";
                    global.db.groups.get(message.chatId).setWatchingUser(user, true);
                    global.db.groups.get(message.chatId).setWatchLog(channel);
                    global.db.groups.get(message.chatId).setWatching(true);
                    return client.react(message.id, "✅")
                }
            } else {
                global.db.groups.get(message.chatId).setWatchingUser("EVERYONE", true);
                global.db.groups.get(message.chatId).setWatchLog(message.chatId);
                global.db.groups.get(message.chatId).setWatching(true);
                return client.react(message.id, "✅")
            }
        } else if (!message.isGroupMsg) {
            global.db.users.create(message.from)
            global.db.users.create(message.to)
            if (args.length > 0) {
                var user = args[0];
                var channel = message.chatId;
                if(content.includes("@c.us") || content.includes("@g.us")) {
                    channel = args[args.length-1];
                }
                if (channel == user) user = message.chatId;
                global.db.users.get(client.purify(user)).setWatching(true);
                global.db.users.get(client.purify(user)).setWatchLog(channel);
                return client.react(message.id, "✅")
            } else {
                var user = message.to;
                var channel = message.chatId;
                global.db.users.get(client.purify(user)).setWatching(true);
                global.db.users.get(client.purify(user)).setWatchLog(channel);
                return client.react(message.id, "✅")
            }
        } else {
            client.react(message.id, "❌")
        }
    }
}
