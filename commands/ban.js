const { prefix } = require("../config.json");

module.exports = {
    name: "ban",
    description: "Remove user from group.",
    aliases: ["kick"],
    cooldown: 5000,
    usage: "Kullanıcıyı gruptan atmaya yarar. Komudu kullanabilmek için hem benim hem de kullanan kişinin yetkisi olması gerek. Bir kişiyi etiketleyerek kullanılır.",

    async run(bot, message, args) {
        {
            if (message.isGroupMsg) {
                admins = await bot.getGroupAdmins(message.chatId)
                if (admins.includes(message.sender.id)) {
                    if (message.mentionedJidList.length > 0) {
                        var x = await bot.removeParticipant(message.chatId, message.mentionedJidList[0]);
                        if (x == "NOT_A_GROUP_CHAT") return await bot.reply(message.from, "Burası bir grup sohbeti değil!", message.id)
                        if (x == "GROUP_DOES_NOT_EXIST") return await bot.reply(message.from, "Böyle bir grup yok!", message.id)
                        if (x == "NOT_A_PARTICIPANT") return await bot.reply(message.from, "Böyle birisi bu grupta yok!", message.id)
                        if (x == "INSUFFICIENT_PERMISSIONS") return await bot.reply(message.from, "Adamı banlıcak yetkim yok knk", message.id)
                    } else {
                        await bot.reply(message.from, "Bir kişiyi etiketlemelisin!", message.id)
                    }
                } else {
                    await bot.reply(message.from, "Yetkin yok kı :D", message.id)
                }
            }  else {
                await bot.reply(message.from, "Bu bir grup sohbeti değil!", message.id)
            }
        }
    }
}
