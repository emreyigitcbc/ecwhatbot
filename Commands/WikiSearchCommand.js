const wiki = require('wikijs').default;

module.exports = {
    name: "wiki",
    aliases: [],
    usage: "wiki_usage",
    category: "general",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 0) {
            query = args.join(" ")
            try {
                data = wiki({ apiUrl: `https://${lang.language}.wikipedia.org/w/api.php` }).page(query).then(page => page.rawContent()).then(content => {
                    return client.reply(message.from, content.substring(0, 4000) + "...", message.id)
                }).catch(err => {
                    return client.reply(message.from, lang.wiki_not_found, message.id)
                })
            } catch {
                client.react(message.id, "❌");
                return client.reply(message.from, lang.wiki_not_found, message.id)
            }
        }
    }
}
