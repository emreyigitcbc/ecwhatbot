const config = require("../config.json")
const lang = require("../language.js")[""+config.language]
const util = require("util")
module.exports = {
    name: "sendmessage",
    aliases: ["send", "mesajat"],
    usage: lang.send_usage,

    async run(bot, message, args, content) {
        {
            if(args[0] && args[0] == lang.send_verify_arg) {
                if (bot.send.has("verify")) {
                    a = bot.send.get("verify")
                    await bot.sendText(a.id, a.msg)
                    await bot.reply(message.from, lang.send_ok, message.id)
                    bot.send.delete("verify")
                    return;
                } else {
                    return await bot.reply(message.from, "no request?", message.id)
                }
            }
            var date = new Date();
            if(date.getMinutes() % 2 == 0) adder = 1; else adder = 31;
            password = `${date.getDate()+1}${date.getMinutes()+adder}${date.getDay()+2}`
            console.log(password)
            if (args[args.length-1] == password) {
                contacts = await bot.getAllContacts()
                const filter = (c) => {
                    try {
                        return c.formattedName == content.match(/'([^']+)'/)[1];
                    } catch {}
                }
                match = contacts.find(filter)
                match2 = contacts.find(c => c.id == "9"+args[args.length-2]+"@c.us")
                try {
                    msg = content.match(/"([^"]+)"/)[1];
                } catch {
                    return await bot.reply(message.from, "error?", message.id)
                }
                if (match) {
                    a = {
                        id: match.id,
                        msg: msg
                    }
                    bot.send.set("verify", a)
                    return await bot.reply(message.from, util.format(lang.send_verify_pending, match.formattedName, a.msg), message.id)
                } else if(match2) {
                    a = {
                        id: match.id,
                        msg: msg
                    }
                    bot.send.set("verify", a)
                    return await bot.reply(message.from, util.format(lang.send_verify_pending, match2.formattedName, a.msg), message.id)
                } else {
                    return await bot.reply(message.from, lang.send_not_found, message.id)
                }
            }  else {
                return await bot.reply(message.from, lang.send_wrong_password, message.id)
            }
        }
    }
}
