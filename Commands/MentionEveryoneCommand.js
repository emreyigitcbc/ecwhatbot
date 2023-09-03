module.exports = {
    name: "mention",
    aliases: ["etiketle", "everyone"],
    category: "moderation",
    usage: "mention_usage",
    permissions: 10,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (args.length > 0 && message.isGroupMsg) {
            real_message = args.join(" ")
            members = await client.getGroupMembersId(message.from)
            for(var i = 0; i < members.length; i++ ) {
                members[i] = members[i].split("@")[0]
            }
            real_message = real_message +"\n\n" + "@" + members.join(" @")
            client.sendTextWithMentions(message.from, real_message)
        } else {
            client.react(message.id, "❌")
        }
    }
}
