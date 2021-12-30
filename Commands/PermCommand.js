const config = require("../config.json")
const lang = require(`../language.${config.language}.js`)

module.exports = {
    name: "permissions",
    aliases: ["perms", "yetkiler", "yetki"],
    usage: lang.trusted_usage,
    permissions: 999,

    async run(client, message, sender, perms, prefix, args, content) {
        if (args.length > 1) {
            if (lang.permissions_add_args.includes(args[0])) {
                try {
                    permLevel = parseInt(args[2])
                    client.setPermissions(message.mentionedJidList[0], permLevel)
                    return client.reply(message.from, client.format(lang.permissions_successfull, permLevel), message.id);
                } catch {}
            } else if (lang.permissions_get_args.includes(args[0])) {
                perms = client.getPermissions(message.mentionedJidList[0])
                return client.reply(message.from, client.format(lang.permissions_user, perms), message.id);
            } else {
                return client.reply(message.from, lang.permissions_usage, message.id);
            }
        } else {
            return client.reply(message.from, lang.permissions_usage, message.id);
        }
    }
}
