const { client } = require('../index');

client.onMessageDeleted(async message => {
    if (message.type != "chat") return;
    if (message.from.includes("@g.us")) {
        if (!await client.checkGroupWatchDeleted(client.purify(message.from))) return;
        if (!await client.checkUserWatchDeletedGroup(client.purify(message.author))) return;
        const lang = require(`../Langs/language.${await client.getUserLanguage(client.purify(message.author))}.js`)
        var date = new Date(message.t * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.slice(-2) + '.' + seconds.slice(-2);
        client.sendText(message.from, client.format(lang.message_deleted, message.notifyName, formattedTime, message.body))
    } else {
        if (!await client.checkUserWatchDeletedPriv(client.purify(message.from))) return;
        const lang = require(`../Langs/language.${await client.getUserLanguage(client.purify(message.from))}.js`)
        var date = new Date(message.t * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.slice(-2) + '.' + seconds.slice(-2);
        client.sendText(message.from, client.format(lang.message_deleted, message.notifyName, formattedTime, message.body))
    }
})

module.exports = {
    name: "onMessageDeleted"
}