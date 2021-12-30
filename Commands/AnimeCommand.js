const config = require("../config.json")
const lang = require(`../language.${config.language}.js`)
const hmfull = require("hmfull");
const paths = ["HMtai", "Nekos", "NekoLove", "Miss"]
const sub_paths = { HMtai_sfw: Object.keys(hmfull.HMtai.sfw), HMtai_nsfw: Object.keys(hmfull.HMtai.nsfw), Nekos_sfw: Object.keys(hmfull.Nekos.sfw), Nekos_nsfw: Object.keys(hmfull.Nekos.nsfw), NekoLove_sfw: Object.keys(hmfull.NekoLove.sfw), NekoLove_nsfw: Object.keys(hmfull.NekoLove.nsfw), Miss_sfw: Object.keys(hmfull.Miss.sfw), Miss_nsfw: Object.keys(hmfull.Miss.nsfw) }

module.exports = {
    name: "anime",
    usage: lang.anime_usage,
    aliases: ["hentai", "ht"],
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content) {
        let trusted = require("../SafeGroups.json")
        if (!message.fromMe && !(perms >= 998)) if (message.chat.isGroup && !trusted.groups.includes(message.chat.contact.id)) return;
        let path = null;
        let found = false;
        if (args.length > 0) {
            Object.keys(sub_paths).forEach(async key => {
                if (sub_paths[key].includes(args[0]) && !found) {
                    found = true
                    params = key.split("_")
                    path = hmfull[params[0]][params[1]]
                    console.log(params)
                    try {
                        const anime = await path[args[0]]()
                        await client.sendImage(message.from, anime.url, 'file.jpg');
                        return;
                    } catch { }
                }
            })
            paths.forEach(async elem => {
                if (args[0].toLowerCase() == elem.toLowerCase() && !found) {
                    path = hmfull[elem]
                    if (path.sfw.hasOwnProperty(args[1].toLowerCase())) {
                        found = true
                        try {
                            console.log(elem)
                            const anime = await path.sfw[args[1].toLowerCase()]()
                            await client.sendImage(message.from, anime.url, 'file.jpg');
                            return;
                        } catch { }
                    } else if (path.nsfw.hasOwnProperty(args[1].toLowerCase())) {
                        found = true
                        try {
                            const anime = await path.nsfw[args[1].toLowerCase()]()
                            await client.sendImage(message.from, anime.url, 'file.jpg');
                            return;
                        } catch { }
                    }
                }
            })
        }
        if (!found){
            try {
                availablePaths = ["wallpaper", "mobileWallpaper", "neko"]
                selectedCategory = availablePaths[Math.floor(Math.random() * availablePaths.length)]
                realPath = hmfull.HMtai.sfw[selectedCategory]
                const anime = await realPath();
                return await client.sendImage(message.from, anime.url, 'file.jpg')
            } catch { }
        }
    }
}