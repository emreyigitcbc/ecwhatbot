const config = require("../config.json")
const lang = require("../language.js")[config.language]
const hmfull = require("hmfull");

module.exports = {
    name: "anime",
    usage: lang.anime_usage,
    aliases: ["hentai"],

    async run(bot, message, args) {
        if (args.length > 0) category = (args.join("")).toLowerCase(); else category = null;
        switch (category) {
            default:
                try {
                    const anime = hmfull.HMtai.sfw.mobileWallpaper()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg')
                } catch { }
                break;
            case "zettairyouiki":
                try {
                    const anime = hmfull.HMtai.nsfw.zettaiRyouiki()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'That one part of the flesh being squeeze in thigh-highs~<3')
                } catch { }
                break;
            case "nsfwmobilewallpaper":
                try {
                    const anime = hmfull.HMtai.nsfw.nsfwMobileWallpaper()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Anime Mobile Wallpaper')
                } catch { }
                break;
            case "nsfwneko":
                try {
                    const anime = hmfull.HMtai.nsfw.neko()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Neko Girls (Cat Girls)')
                } catch { }
                break;
            case "gif":
                try {
                    const anime = hmfull.HMtai.nsfw.gif()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an animated image, so yes :3')
                } catch { }
                break;
            case "tentacles":
                try {
                    const anime = hmfull.HMtai.nsfw.tentacles()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Im sorry but, why do you like it? Uh..')
                } catch { }
                break;
            case "gangbang":
                try {
                    const anime = hmfull.HMtai.nsfw.gangbang()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', '5 on 1? Uh..')
                } catch { }
                break;
            case "uniform":
                try {
                    const anime = hmfull.HMtai.nsfw.uniform()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'School and many other Uniforms~')
                } catch { }
                break;
            case "ahegao":
                try {
                    const anime = hmfull.HMtai.nsfw.ahegao()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So happy woman faces :))')
                } catch { }
                break;
            case "vagina":
                try {
                    const anime = hmfull.HMtai.nsfw.vagina()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'The genitals of a female, or a cat, you give the meaning.')
                } catch { }
                break;
            case "thighs":
                try {
                    const anime = hmfull.HMtai.nsfw.thighs()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Oh, i so like it, its best of the best, like a religion <3')
                } catch { }
                break;
            case "foot":
                try {
                    const anime = hmfull.HMtai.nsfw.foot()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So you like smelly feet huh?')
                } catch { }
                break;
            case "boobjob":
                try {
                    const anime = hmfull.HMtai.nsfw.boobjob()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So soft, round ... gentle ... damn we love it')
                } catch { }
                break;
            case "blowjob":
                try {
                    const anime = hmfull.HMtai.nsfw.blowjob()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an image of a girl sucking on a sharp blade!')
                } catch { }
                break;
            case "cuckold":
                try {
                    const anime = hmfull.HMtai.nsfw.cuckold()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Wow, I wont even question your fetishes.')
                } catch { }
                break;
            case "glasses":
                try {
                    const anime = hmfull.HMtai.nsfw.glasses()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Girls that wear glasses, uwu~')
                } catch { }
                break;
            case "pantsu":
                try {
                    const anime = hmfull.HMtai.nsfw.pantsu()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I mean... just why? You like underwear?')
                } catch { }
                break;
            case "yuri":
                try {
                    const anime = hmfull.HMtai.nsfw.yuri()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'What about cute Les?~')
                } catch { }
                break;
            case "elves":
                try {
                    const anime = hmfull.HMtai.nsfw.elves()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So, its not Elvis Presley, but i know, you like it :)')
                } catch { }
                break;
            case "orgy":
                try {
                    const anime = hmfull.HMtai.nsfw.orgy()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Group Lewd Acts')
                } catch { }
                break;
            case "ero":
                try {
                    const anime = hmfull.HMtai.nsfw.ero()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'eros, ero Uniforms, etc, you know what eros are :3')
                } catch { }
                break;
            case "public":
                try {
                    const anime = hmfull.HMtai.nsfw.public()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Some people like do it on a public..uh~')
                } catch { }
                break;
            case "masturbation":
                try {
                    const anime = hmfull.HMtai.nsfw.masturbation()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'You like lewd solo?~')
                } catch { }
                break;
            case "incest":
                try {
                    const anime = hmfull.HMtai.nsfw.incest()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know, you like it. Brother and sister <3 And..mo...omg')
                } catch { }
                break;
            case "hentai":
                try {
                    const anime = hmfull.HMtai.nsfw.hentai()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random vanilla hentai imageURL~')
                } catch { }
                break;
            case "femdom":
                try {
                    const anime = hmfull.HMtai.nsfw.femdom()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Female Domination?')
                } catch { }
                break;
            case "manga":
                try {
                    const anime = hmfull.HMtai.nsfw.manga()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random doujin page imageURL!')
                } catch { }
                break;
            case "creampie":
                try {
                    const anime = hmfull.HMtai.nsfw.creampie()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot, sticky, and inside uwu')
                } catch { }
                break;
            case "cum":
                try {
                    const anime = hmfull.HMtai.nsfw.cum()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically sticky white stuff that is usually milked from sharpies.')
                } catch { }
                break;
            case "bdsm":
                try {
                    const anime = hmfull.HMtai.nsfw.bdsm()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'If you dont know what it is, search it up')
                } catch { }
                break;
            case "ass":
                try {
                    const anime = hmfull.HMtai.nsfw.ass()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know you like anime ass~ uwu')
                } catch { }
                break;
            case "wallpaper":
                try {
                    const anime = hmfull.HMtai.sfw.wallpaper()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'ğ')
                } catch { }
                break;
            case "slap":
                try {
                    const anime = hmfull.HMtai.sfw.slap()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW slap gifs xD')
                } catch { }
                break;
            case "lick":
                try {
                    const anime = hmfull.HMtai.sfw.lick()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW licks gifs :P')
                } catch { }
                break;
            case "jahy":
                try {
                    const anime = hmfull.HMtai.sfw.jahy()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot Jahy :3')
                } catch { }
                break;
            case "neko":
                try {
                    const anime = hmfull.HMtai.sfw.neko()
                    return await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW Neko Girls (Cat Girls)')
                } catch { }
                break;
        }
        return;
    }
}