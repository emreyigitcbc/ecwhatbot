const config = require("../config.json")
const lang = require(`../language.${config.language}.js`)

module.exports = {
    name: "trusted",
    aliases: ["trustedlist", "güvenli", "güvenliliste"],
    usage: lang.trusted_usage,
    permissions: 998,

    async run(client, message, sender, perms, prefix, args, content) {
        if (args.length > 0) {
            if (lang.trusted_add_args.includes(args[0])) {
                client.addTrustedList(message.chatId)
            } else if (lang.trusted_remove_args.includes(args[0])) {
                client.removeTrustedList(message.chatId)
            } else {
                return client.reply(message.from, lang.trusted_usage, message.id);
            }
        } else {
            return client.reply(message.from, lang.trusted_usage, message.id);
        }
    }
}
