module.exports = {
    name: "ban",
    aliases: [],
    usage: "ban_usage",
    category: "moderation",
    permissions: 1,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        {
            if (message.isGroupMsg) {
                let admins = await client.getGroupAdmins(message.chatId)
                if (admins.includes(message.sender.id)) {
                    if (message.mentionedJidList.length > 0) {
                        var x = await client.removeParticipant(message.chatId, message.mentionedJidList[0]);
                        if (x == "NOT_A_GROUP_CHAT") return await client.reply(message.from, lang.ban_not_groups, message.id)
                        if (x == "GROUP_DOES_NOT_EXIST") return await client.reply(message.from, lang.ban_error_no_group, message.id)
                        if (x == "NOT_A_PARTICIPANT") return await client.reply(message.from, lang.ban_error_no_member, message.id)
                        if (x == "INSUFFICIENT_PERMISSIONS") return await client.reply(message.from, lang.ban_error_no_perm, message.id)
                    } else {
                        await client.reply(message.from, lang.ban_error_no_mention, message.id)
                    }
                } else {
                    await client.reply(message.from, lang.ban_error_no_perm, message.id)
                }
            }  else {
                await client.reply(message.from, lang.ban_not_group, message.id)
            }
        }
    }
}
