module.exports = {
    name: "trusted",
    aliases: ["trustedlist", "güvenli", "güvenliliste"],
    usage: "trusted_usage",
    category: "moderation",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 0) {
            if (lang.trusted_add_args.includes(args[0])) {
                client.addTrustedList(client.purify(message.chatId))
            } else if (lang.trusted_remove_args.includes(args[0])) {
                client.removeTrustedList(client.purify(message.chatId))
            } else {
                return client.reply(message.from, lang.trusted_usage, message.id);
            }
        } else {
            return client.reply(message.from, lang.trusted_usage, message.id);
        }
    }
}
