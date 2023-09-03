module.exports = {
    name: "stop",
    aliases: ["durdur"],
    category: "owner",
    usage: "stop_usage",
    permissions: 11,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        {
            client.react(message.id, "🫡")
            process.exit()
        }
    }
}
