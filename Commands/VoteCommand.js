const ms = require("ms")
module.exports = {
    name: "createvote",
    aliases: ["oy", "vote"],
    category: "general",
    usage: "vote_usage",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        if (!message.isGroupMsg) return;
        if (args.includes(lang.vote_args[2])) {
            if (!client.votes.has(message.chatId)) return;
            try {
                vote = client.votes.get(message.chatId)
                if(vote.host != sender) return;
                if (vote.x == vote.y) {
                    winner = lang.vote_noone;
                    lastStatus = lang.vote_nobody_won
                } else if (vote.x > vote.y) {
                    winner = vote.x_message;
                    lastStatus = lang.vote_won
                }
                else {
                    winner = vote.y_message;
                    lastStatus = lang.vote_won
                }
                await client.sendText(message.from, client.format(lang.vote_ended, vote.x_message, vote.x, vote.y_message, vote.y, winner, lastStatus))
                client.votes.delete(message.chatId)
            } catch { }
        } else if (content.includes("/")) {
            if (client.votes.has(message.chatId)) return;
            splits = content.split("/")
            if(splits.length < 1) return;
            splits[1] = splits[1].split("-").shift()
            options = {
                timer: "0",
                max: 0
            }
            if (args.includes(lang.vote_args[0])) {
                i = args.indexOf(lang.vote_args[0])
                if (i > 0) {
                    try {
                        options.timer = args[i + 1]
                    } catch { }
                }
            }
            if (args.includes(lang.vote_args[1])) {
                i = args.indexOf(lang.vote_args[1])
                if (i > 0) {
                    try {
                        options.max = Number(args[i + 1])
                    } catch { }
                }
            }
            if (options.timer == "0") timerText = lang.vote_no_timeout; else timerText = options.timer
            if (options.max == 0) maxText = lang.vote_no_max; else maxText = options.max + ""
            if (options.timer != "0") {
                setTimeout(async () => {
                    try {
                        if (!client.votes.has(message.chatId)) return
                        vote = client.votes.get(message.chatId)
                        if (vote.x == vote.y) {
                            winner = lang.vote_noone;
                            lastStatus = lang.vote_nobody_won
                        } else if (vote.x > vote.y) {
                            winner = vote.x_message;
                            lastStatus = lang.vote_won
                        }
                        else {
                            winner = vote.y_message;
                            lastStatus = lang.vote_won
                        }
                        await client.sendText(message.from, client.format(lang.vote_ended, vote.x_message, vote.x, vote.y_message, vote.y, winner, lastStatus))
                        client.votes.delete(message.chatId)
                    } catch { }
                }, ms(options.timer))
            }
            let sentMessage = await client.sendText(message.from, client.format(lang.vote_started, splits[0], splits[1], timerText, maxText))
            client.votes.set(message.chatId, { lang: {vote_ended: lang.vote_ended, vote_status: lang.vote_status, vote_noone: lang.vote_noone, vote_nobody_won: lang.vote_nobody_won, vote_won: lang.vote_won}, timer: options.timer, max: options.max, id: sentMessage, x: 0, y: 0, x_message: splits[0], y_message: splits[1], used_people: [], host: sender})

        } else {
            return client.reply(message.from, lang.vote_usage, message.id)
        }
    }
}