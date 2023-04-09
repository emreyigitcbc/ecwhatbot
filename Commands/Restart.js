module.exports = {
    name: "restart",
    aliases: [],
    usage: "restart_usage",
    category: "owner",
    permissions: 11,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            console.log(lang.restart_requested)
            client.removeAllListeners()
            for (var module of client.modules) {
                delete require.cache[require.resolve("../" + module)];
            }
            console.log(lang.restart_starting)
            require("../handler")(client);
            client.react(message.id, "✅")
        } catch {
            client.react(message.id, "❌")
        }
    }
}