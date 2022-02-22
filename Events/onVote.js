const { client } = require('../index');

client.onAnyMessage(async message => {
    if (!message.isGroupMsg) return;
    if (message.fromMe) message.from = message.to;
    message.sender.id = client.purify(message.sender.id)
    message.chatId = client.purify(message.chatId)
    if (message.quotedMsgObj == null) return;
    if (!client.votes.has(message.chatId)) return;
    if (message.quotedMsgObj.id != client.votes.get(message.chatId).id) return;
    let x = client.votes.get(message.chatId)
    if (x.used_people.includes(message.sender.id)) return;
    if (message.body.includes("+1") || message.body == "1") {
        x.x += 1
        client.votes.set(message.chatId, x)
    } else if (message.body.includes("-1") || message.body.includes("2")) {
        x.y += 1
        client.votes.set(message.chatId, x)
    }
    x.used_people.push(message.sender.id)
    client.votes.set(message.chatId, x)
    if (x.x + x.y >= x.max && x.max != 0) {
        // try catch
        if (x.x == x.y) {
            winner = x.lang.vote_noone;
            lastStatus = x.lang.vote_nobody_won
        } else if (x.x > x.y) {
            winner = x.x_message;
            lastStatus = x.lang.vote_won
        }
        else {
            winner = x.y_message;
            lastStatus = x.lang.vote_won
        }
        await client.sendText(message.from, client.format(x.lang.vote_ended, x.x_message, x.x, x.y_message, x.y, winner, lastStatus))
        client.votes.delete(message.chatId)
    } else {
        await client.sendText(message.from, client.format(x.lang.vote_status, x.x_message, x.x, x.y_message, x.y))
    }
})

module.exports = {
    name: "onVote"
}