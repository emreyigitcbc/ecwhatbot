const config = require("../config.json")
const lang = require("../language.js")[""+config.language]
module.exports = {
    name: "ban",
    aliases: ["kick"],
    usage: lang.ban_usage,

    async run(bot, message, args) {
        {
            if (message.isGroupMsg) {
                admins = await bot.getGroupAdmins(message.chatId)
                if (admins.includes(message.sender.id)) {
                    if (message.mentionedJidList.length > 0) {
                        var x = await bot.removeParticipant(message.chatId, message.mentionedJidList[0]);
                        if (x == "NOT_A_GROUP_CHAT") return await bot.reply(message.from, lang.ban_not_groups, message.id)
                        if (x == "GROUP_DOES_NOT_EXIST") return await bot.reply(message.from, lang.ban_error_no_group, message.id)
                        if (x == "NOT_A_PARTICIPANT") return await bot.reply(message.from, lang.ban_error_no_member, message.id)
                        if (x == "INSUFFICIENT_PERMISSIONS") return await bot.reply(message.from, lang.ban_error_no_perm, message.id)
                    } else {
                        await bot.reply(message.from, lang.ban_error_no_mention, message.id)
                    }
                } else {
                    await bot.reply(message.from, lang.ban_error_no_perm, message.id)
                }
            }  else {
                await bot.reply(message.from, lang.ban_not_group, message.id)
            }
        }
    }
}
