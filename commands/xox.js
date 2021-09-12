const { prefix } = require("../config.json");

module.exports = {
    name: "xox",
    description: "XOX Mini game",
    aliases: ["sos", "xo"],
    cooldown: 2000,
    usage: "xox [başlat/<satır ismi>] [başlat: <büyüklük>/grupta: <@kişi>/<sütun ismi>] [oyun başladıysa: <x/o>]",

    async run(bot, message, args) {
        if (!message.isGroupMsg) {
            if (bot.xox.has(message.sender.id + "@" + message.to) || bot.xox.has(message.to + "@" + message.sender.id)) {
                if (bot.xox.get(message.sender.id + "@" + message.to)) {
                    sgame = bot.xox.get(message.sender.id + "@" + message.to)
                    pointer = 1
                } else {
                    sgame = bot.xox.get(message.to + "@" + message.sender.id)
                    pointer = 2
                }
                if (args[0] && args[0] == "bitir") {
                    sgame.endVotes += 1
                    if (sgame.endVotes == 2) {
                        if(sgame.scores.a > sgame.scores.b) {
                            text = sgame.a.name + " - " + sgame.scores.a + "\nKaybeden ezik:\n" + sgame.b.name + " - " + sgame.scores.b
                        } else {
                            text = sgame.b.name + " - " + sgame.scores.b + "\nKaybeden ezik:\n" + sgame.a.name + " - " + sgame.scores.a
                        }
                        await bot.reply(message.from, "Oyun bitirildi! Kazanan:\n"+text, message.id)
                        if (pointer == 1) {
                            bot.xox.delete(message.sender.id + "@" + message.to, sgame)
                        } else if (pointer == 2) {
                            bot.xox.delete(message.to + "@" + message.sender.id, sgame)
                        }
                        return;
                    } else {
                        if (pointer == 1) {
                            bot.xox.set(message.sender.id + "@" + message.to, sgame)
                        } else if (pointer == 2) {
                            bot.xox.set(message.to + "@" + message.sender.id, sgame)
                        }
                        await bot.reply(message.from, "Oyunu bitirmek için oy verdin, karşı taraf da vermeli.", message.id)
                        return;
                    }
                } else if (sgame.tour == message.sender.id) {
                    if (args.length == 3) {
                        if (parseInt(args[0]) > 0 && parseInt(args[0]) <= sgame.size) {
                            row = parseInt(args[0]) - 1
                            if (parseInt(args[1]) > 0 && parseInt(args[1]) <= sgame.size) {
                                column = parseInt(args[1]) - 1
                                selected = null;
                                if (args[2] == "x") selected = "x"
                                if (args[2] == "o") selected = "o"
                                if (!selected) {
                                    return bot.reply(message.from, "X mi O mu yazmayı unuttun sanırım", message.id)
                                }
                            } else {
                                return bot.reply(message.from, "Satır numarası geçersiz! Min 1, Max " + sgame.size, message.id)
                            }
                        } else {
                            return bot.reply(message.from, "Sütun numarası geçersiz! Min 1, Max " + sgame.size, message.id)
                        }
                    } else {
                        return bot.reply(message.from, "Sanki bir şeyler eksik gibi? (SATIR SÜTUN X/O)", message.id)
                    }
                    realIndex = row * sgame.size + column
                    if (sgame.game[realIndex] == "NONE") {
                        sgame.game[realIndex] = selected
                        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
                        if (countOccurrences(sgame.game, "NONE") == 0) {
                            if(sgame.scores.a > sgame.scores.b) {
                                text = sgame.a.name + " - " + sgame.scores.a + "\nKaybeden ezik:\n" + sgame.b.name + " - " + sgame.scores.b
                            } else {
                                text = sgame.b.name + " - " + sgame.scores.b + "\nKaybeden ezik:\n" + sgame.a.name + " - " + sgame.scores.a
                            }
                            await bot.reply(message.from, "Oyun bitti! Kazanan:\n"+text, message.id)
                            if (pointer == 1) {
                                bot.xox.delete(message.sender.id + "@" + message.to, sgame)
                            } else if (pointer == 2) {
                                bot.xox.delete(message.to + "@" + message.sender.id, sgame)
                            }
                            return;
                        }
                        if (sgame.a.id == sgame.tour) nextPlayer = "b"; else nextPlayer = "a"
                        sgame.tour = sgame[nextPlayer].id
                        if (pointer == 1) {
                            bot.xox.set(message.sender.id + "@" + message.to, sgame)
                        } else if (pointer == 2) {
                            bot.xox.set(message.to + "@" + message.sender.id, sgame)
                        }
                        // KONTROLLER
                        maxLeftCheckWidth = realIndex % sgame.size
                        maxRightCheckWidth = sgame.size - realIndex % sgame.size
                        maxUpCheckHeigth = parseInt(realIndex / sgame.size)
                        maxDownCheckHeigth = sgame.size - parseInt(realIndex / sgame.size)

                        sTempBoard = sgame.game.map(a => a.toLowerCase())
                        if (sgame.a.id == message.sender.id) player = "a"; else player = "b"
                        if (sTempBoard[realIndex] == sTempBoard[realIndex + 1] && sTempBoard[realIndex] == sTempBoard[realIndex + 2] && (maxRightCheckWidth > 2 || (maxRightCheckWidth > 0 && maxLeftCheckWidth > 0))) {
                            sgame.game[realIndex] = `${sgame.game[realIndex]}`.toUpperCase()
                            sgame.game[realIndex + 1] = `${sgame.game[realIndex + 1]}`.toUpperCase()
                            sgame.game[realIndex + 2] = `${sgame.game[realIndex + 2]}`.toUpperCase()
                            sgame.scores[player] += 1
                        }
                        if (sTempBoard[realIndex] == sTempBoard[realIndex - 1] && sTempBoard[realIndex] == sTempBoard[realIndex - 2] && (maxLeftCheckWidth > 2 || (maxRightCheckWidth > 0 && maxLeftCheckWidth > 0))) {
                            sgame.game[realIndex] = `${sgame.game[realIndex]}`.toUpperCase()
                            sgame.game[realIndex - 1] = `${sgame.game[realIndex - 1]}`.toUpperCase()
                            sgame.game[realIndex - 2] = `${sgame.game[realIndex - 2]}`.toUpperCase()
                            sgame.scores[player] += 1
                        }
                        if (sTempBoard[realIndex] == sTempBoard[realIndex + sgame.size] && sTempBoard[realIndex] == sTempBoard[realIndex + 2 * sgame.size] && (maxDownCheckHeigth > 2 || (maxDownCheckHeigth > 0 && maxUpCheckHeigth > 0))) {
                            sgame.game[realIndex] = `${sgame.game[realIndex]}`.toUpperCase()
                            sgame.game[realIndex + sgame.size] = `${sgame.game[realIndex + sgame.size]}`.toUpperCase()
                            sgame.game[realIndex + 2 * sgame.size] = `${sgame.game[realIndex + 2 * sgame.size]}`.toUpperCase()
                            sgame.scores[player] += 1
                        }
                        if (sTempBoard[realIndex] == sTempBoard[realIndex - sgame.size] && sTempBoard[realIndex] == sTempBoard[realIndex - 2 * sgame.size] && (maxUpCheckHeigth > 2 || (maxDownCheckHeigth > 0 && maxUpCheckHeigth > 0))) {
                            sgame.game[realIndex] = `${sgame.game[realIndex]}`.toUpperCase()
                            sgame.game[realIndex - sgame.size] = `${sgame.game[realIndex - sgame.size]}`.toUpperCase()
                            sgame.game[realIndex - 2 * sgame.size] = `${sgame.game[realIndex - 2 * sgame.size]}`.toUpperCase()
                            sgame.scores[player] += 1
                        }
                        if (pointer == 1) {
                            bot.xox.set(message.sender.id + "@" + message.to, sgame)
                        } else if (pointer == 2) {
                            bot.xox.set(message.to + "@" + message.sender.id, sgame)
                        }
                        g = "[0] "
                        for (var j = 0; j < sgame.size; j++) g += "[" + (j + 1) + "] "
                        for (var i = 0; i < (sgame.size * sgame.size); i++) {
                            if (i % sgame.size == 0 || i == 0) {
                                m = "[" + (parseInt(i / sgame.size) + 1) + "] "
                                for (var j = 0; j < sgame.size; j++) {
                                    m += "[" + sgame.game[i + j].replace("NONE", "0") + "] "
                                }
                                g += "\n" + m
                            }
                        }
                        g += `\n\n*Skor Tablosu:*\n${sgame.a.name} - ${sgame.scores.a}\n${sgame.b.name} - ${sgame.scores.b}\n(Bitirmek için ${prefix}xo bitir)`
                        await bot.reply(message.from, g, message.id)
                        return bot.reply(message.from, "Tm kanki sen oynadın şimdi sıra diğer tarafta", message.id)
                    } else {
                        return bot.reply(message.from, "Kanki bura zaten dolu ya", message.id)
                    }
                } else {
                    return bot.reply(message.from, "Senin sıran değil ki olm", message.id)
                }
            } else {
                if (args.length > 0) {
                    if (args[0] == "başlat") {
                        x = await bot.getMe()
                        size = 3
                        if (args[1]) size = parseInt(args[1])
                        if (size > 6) size = 6
                        bot.xox.set(message.sender.id + "@" + message.to, {
                            endVotes: 0,
                            size: size,
                            game: Array(size * size).fill("NONE"),
                            counted: [],
                            tour: message.to,
                            a: {
                                id: message.to,
                                name: message.chat.contact.pushname
                            },
                            b: {
                                id: message.sender.id,
                                name: x.pushname
                            },
                            scores: {
                                a: 0,
                                b: 0
                            }
                        })
                        g = "[0] "
                        for (var j = 0; j < size; j++) g += "[" + (j + 1) + "] "
                        for (var i = 0; i < (size * size); i++) {
                            if (i % size == 0 || i == 0) {
                                m = "[" + (parseInt(i / size) + 1) + "] "
                                for (var j = 0; j < size; j++) {
                                    m += "[0] "
                                }
                                g += "\n" + m
                            }
                        }
                        g += `\n\n*Skor Tablosu:*\n${message.chat.contact.pushname} - 0\n${x.pushname} - 0\n(Oynamak için ${prefix}xo <satır> <sütun> <x veya o>)\n(Bitirmek için ${prefix}xo bitir)`
                        await bot.sendText(message.from, g)
                        return bot.reply(message.from, "Tmdır kanki oyun başladı, ama sıra karşı tarafta ya", message.id)
                    } else {
                        return bot.reply(message.from, "Knki yanlıs kullanıyon", message.id)
                    }
                }
            }
        } else {
            return bot.reply(message.from, "Knki grup sohbetlerini desteklemiyom simdilik ok?", message.id)
        }
    }
}
