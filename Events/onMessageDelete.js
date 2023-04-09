const { client } = require('../index');
const { decryptMedia } = require("@open-wa/wa-decrypt");

client.onMessageDeleted(async message => {
    try {
        content = message?.body || ""
        if (message.type != "chat") content = message.caption;
        var date = new Date(message.t * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var formattedTime = `${day}/${month}/${year} ` + hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
        var date2 = new Date();
        var hours2 = date2.getHours();
        var minutes2 = "0" + date2.getMinutes();
        var seconds2 = "0" + date2.getSeconds();
        var year2 = date2.getFullYear();
        var month2 = date2.getMonth() + 1;
        var day2 = date2.getDate();
        var formattedTime2 = `${day2}/${month2}/${year2} ` + hours2 + ':' + minutes2.slice(-2) + ':' + seconds2.slice(-2);

        const lang = require(`../Langs/language.${global.db.client.language}.js`)
        const messageSplitted = message.id.split("_")
        const props = {
            chatId: messageSplitted[1],
            author: (client.purify(message?.author || "") == "") ? messageSplitted[1] : message.from
        }
        message.notifyName = `${message.notifyName} (${client.purify(props.author)})`
        if (message.id.includes("@g.us")) {
            global.db.groups.create(props.chatId)
            let group = global.db.groups.get(props.chatId);
            if (group.watching) {
                if (group.watching_users.includes("EVERYONE") || group.watching_users.includes(client.purify(message.from))) {
                    if (message.type == "image") {
                        const mediaData = await decryptMedia(message, client.userAgent) || "";
                        client.sendImage(group.watchlog, `data:image/jpeg;base64,${mediaData.toString("base64")}`, "file.jpg", client.format(lang.message_deleted, message.notifyName, formattedTime,formattedTime2, message.type, content))
                    } else if (message.type == "video") {
                        try {
                            const mediaData = await decryptMedia(message, client.userAgent) || "";
                            await client.sendFile(group.watchlog, `data:image/jpeg;base64,${mediaData.toString("base64")}`, "file.mp4", client.format(lang.message_deleted, message.notifyName, formattedTime,formattedTime2, message.type, content))
                        } catch(err) { console.log(err) }
                    } else {
                        client.sendText(group.watchlog, client.format(lang.message_deleted, message.notifyName, formattedTime, formattedTime2, message.type, content))
                    }
                }
            }
        } else {
            global.db.users.create(props.chatId)
            let user = global.db.users.get(props.chatId);
            if (user.watching) {
                if (message.type == "image") {
                    const mediaData = await decryptMedia(message, client.userAgent) || "";
                    client.sendImage(user.watchlog, `data:image/jpeg;base64,${mediaData.toString("base64")}`, "file.jpg", client.format(lang.message_deleted, message.notifyName, formattedTime,formattedTime2, message.type, content))
                } else if (message.type == "video") {
                    try {
                        const mediaData = await decryptMedia(message, client.userAgent) || "";
                        await client.sendFile(group.watchlog, `data:image/jpeg;base64,${mediaData.toString("base64")}`, "file.mp4", client.format(lang.message_deleted, message.notifyName, formattedTime,formattedTime2, message.type, content))
                    } catch(err) { console.log(err) }
                } else {
                    client.sendText(user.watchlog, client.format(lang.message_deleted, message.notifyName, formattedTime,formattedTime2, message.type, content))
                }
            }
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = {
    name: "onMessageDeleted"
}