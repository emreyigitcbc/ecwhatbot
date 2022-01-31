const util = require("util")
module.exports = {
    name: "sendmessage",
    aliases: ["send", "mesajat"],
    category: "moderation",
    usage: "send_usage",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        {
            if(args[0] && args[0] == lang.send_verify_arg) {
                if (client.send.has("verify")) {
                    a = client.send.get("verify")
                    await client.sendText(a.id, a.msg)
                    await client.reply(message.from, lang.send_ok, message.id)
                    client.send.delete("verify")
                    return;
                } else {
                    return await client.reply(message.from, "no request?", message.id)
                }
            }
            var date = new Date();
            if(date.getMinutes() % 2 == 0) adder = 1; else adder = 31;
            password = `${date.getDate()+1}${date.getMinutes()+adder}${date.getDay()+2}`
            console.log(password)
            if (args[args.length-1] == password) {
                contacts = await client.getAllContacts()
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
                    return await client.reply(message.from, "error?", message.id)
                }
                if (match) {
                    a = {
                        id: match.id,
                        msg: msg
                    }
                    client.send.set("verify", a)
                    return await client.reply(message.from, util.format(lang.send_verify_pending, match.formattedName, a.msg), message.id)
                } else if(match2) {
                    a = {
                        id: match.id,
                        msg: msg
                    }
                    client.send.set("verify", a)
                    return await client.reply(message.from, util.format(lang.send_verify_pending, match2.formattedName, a.msg), message.id)
                } else {
                    return await client.reply(message.from, lang.send_not_found, message.id)
                }
            }  else {
                return await client.reply(message.from, lang.send_wrong_password, message.id)
            }
        }
    }
}
