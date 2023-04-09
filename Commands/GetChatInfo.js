module.exports = {
    name: "getchatinfo",
    aliases: ["sohbetbilgi", "chatinfo"],
    category: "moderation",
    usage: "chatinfo_usage",
    permissions: 1,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        let id = message.chatId || "";
        let title = message.chat?.name || "";
        let gm = JSON.stringify(message.chat?.groupMetadata) || ""
        let kind = message.chat?.kind || ""
        let pp = message.chat?.pic || ""
        await client.reply(message.from, client.format(lang.chatinfo_info, id, title, gm, kind, pp), message.id);
    }
}
