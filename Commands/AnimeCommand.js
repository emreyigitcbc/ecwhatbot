const hmfull = require("hmfull");
var paths = []
var sub_paths = {}
var help = "";
for(var path of Object.keys(hmfull)) {
    if (path == "Manual") break;
    paths.push(path);
    help += "*"+path+"*\n"
    for(var sub_path of Object.keys(hmfull[path])){
        sub_paths[path + "_" + sub_path] = Object.keys(hmfull[path][sub_path])
        help += "*"+sub_path +":* "+Object.keys(hmfull[path][sub_path]).join(", ")+"\n"
    }
}

module.exports = {
    name: "anime",
    usage: "anime_usage",
    usage_data: [help],
    category: "fun",
    aliases: ["hentai", "ht"],
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        let path = null;
        let found = false;
        if (args.length > 0) {
            Object.keys(sub_paths).forEach(async key => {
                if (sub_paths[key].includes(args[0]) && !found) {
                    found = true
                    let params = key.split("_")
                    path = hmfull[params[0]][params[1]]
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