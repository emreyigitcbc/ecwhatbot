module.exports = {
    name: "sendmessage",
    aliases: ["send", "mesajat"],
    category: "moderation",
    usage: "send_usage",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        let password = "P@SSW0RD"
        if (args[0] == lang.send_verify_arg) {
            if(client.send.has("Contact")) {
                info = client.send.get("Contact")
                await client.sendText(info.contact.id, info.message)
                await client.reply(message.from, lang.send_ok, message.id)
                client.send.delete("Contact")
            }
        } else if (args[0] == lang.send_delete_arg) {
            if(client.send.has("Contact")) {
                await client.reply(message.from, lang.send_deleted, message.id)
                client.send.delete("Contact")
            }
        } else {
            let splits = content.split("/")
            if (splits[1] == password) {
                let contacts = await client.getAllContacts()
                selectedContact = contacts.filter(c => c.id.includes(splits[0]) || c.formattedName.toLowerCase().includes(splits[0].toLowerCase()))
                if (selectedContact.length > 0) {
                    client.send.set("Contact", { contact: selectedContact[0], message: splits[2] })
                    client.sendText(message.from, client.format(lang.send_verify_pending, selectedContact[0].formattedName, selectedContact[0].id.replace("@c.us", ""), splits[2]))
                } else {
                    client.reply(message.from, lang.send_not_found, message.id)
                }
            } else {
                client.reply(message.from, lang.send_wrong_password, message.id)
            }
            await client.deleteMessage(message.chat.id, message.id)
        }
    }
}