const axios = require("axios").default;
const sfwEndpoints = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink'];
const nsfwEndpoints = ['waifu', 'neko', 'trap', 'blowjob'];
var help = "*sfw:* " + sfwEndpoints.join(", ") + "\n";
help += "*nsfw:* " + nsfwEndpoints.join(", ");
module.exports = {
    name: "waifu",
    usage: "waifu_usage",
    usage_data: [help],
    category: "fun",
    aliases: ["waifus"],
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        let url = "";
        let type = "sfw";
        let category = "waifu";
        if (args.length > 0) {
            args[0] = args[0].toLowerCase();
            if (args[0] == "nsfw") { type = "nsfw"; category = nsfwEndpoints[Math.floor(Math.random() * nsfwEndpoints.length)]; }
            if (args[0] == "sfw") category = sfwEndpoints[Math.floor(Math.random() * sfwEndpoints.length)];
            if (args.length > 1) {
                args[1] = args[1].toLowerCase();
                if ((sfwEndpoints.includes(args[1] && type == "sfw")) || (nsfwEndpoints.includes(args[1] && type == "nsfw"))) category = args[1];
            } else {
                if (nsfwEndpoints.includes(args[0])) {type = "nsfw"; category = args[0];}
                if (sfwEndpoints.includes(args[0])) category = args[0];
            }
        }
        try {
            axios.get(`https://api.waifu.pics/${type}/${category}`).then((response) => {
                try {
                    client.sendImage(message.from, response.data?.url, 'file.jpg', response.data?.url);
                } catch {
                    client.react(message.id, "❌")
                }
            });
        } catch {
            client.react(message.id, "❌")
         }
    }
}