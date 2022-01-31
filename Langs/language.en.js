module.exports = {
    language: "en",

    loading_event_count: "Loading %s events...",
    loading_command_count: "Loading %s commands...",
    event_loaded: "Event '%s' (%s) loaded successfuly.",
    events_loaded: "Events loaded successfuly!",
    command_loaded: "Command '%s' (%s) loaded successfuly. [%s]",
    commands_loaded: "Commands loaded successfuly!",
    langs_found: "%s dil dosyası bulundu. (%s)",
    no_event: "NO EVENT FOUND!",
    no_command: "NO COMMAND FOUND!",
    no_langs: "HİÇ DİL DOSYASI BULUNAMADI!",

    categories: {
        "fun": "Fun",
        "general": "General",
        "moderation": "Moderation"
    },
    
    help: "```CebeciBot```\n*Help Page*\n%s\nFor detailed information about commands: %shelp <command>",
    help_usage: ":D?",

    anime_usage: `anime <provider/category> <if provider provided: category>\nProviders and lists:\n*HMtai*\nwallpaper, mobileWallpaper, neko, jahy, lick, slap, ass, bdsm, cum, creampie, manga, femdom, hentai, incest, masturbation, public, ero, orgy, elves, yuri, pantsu, glasses, cuckold, blowjob, boobjob, foot, thighs, vagina, ahegao, uniform, gangbang, tentacles, gif, nsfwNeko, nsfwMobileWallpaper, zettaiRyouiki\n*Nekos*\npat, hug, kiss, cry, slap, smug, punch, neko, kitsune, waifu, hentai, neko, lesbian, kuni, classic, boobs, blowjob, anal, yuri, trap, tits, femdom, feet, pussy, ero, erofeet, erokitsu, erokemo, eroyuri, eroneko, ledwkitsu, lewdneko, lewdkemo, bj, pwankg, cum, keta, spank, pussyJpg, cumJpg, avatar, wallpaper, holoero, hololewd, futarani, gasm, foxgirl\n*NekoLove*\npat, hug, kiss, cry, slap, smug, punch, neko, kitsune, waifu, nekolewd\n*Miss*\nhug, kiss, cry, kill, view, dance, pussy, boobs, ero`,

    weather_usage: "weather <city>",
    weather_error: "An error occured, please try again later.",
    weather_text: `*Weather report for %s*\n*Temperature:* %s°C\n*Feels:* %s°C\n*Wind:* %s\n*Humidity:* %%s`,

    send_usage: "mesajat <kişi adı/numara> <mesaj....>",
    send_wrong_password: "Yanlış şifre knk",
    send_ok: "Gönderdim knk",
    send_not_found: "Böle birini bulamadım knk ?",
    send_verify_arg: "verify",
    send_verify_pending: "Tamam isteğin alındı, onaylaman gerekiyor tek.\n*Mesajın gideceği kişi:* %s\n*Mesaj:* %s",

    sticker_usage: `*Using by quoting a media or captioning a media.*\n*Available Arguments That It Can Take:*\n*-protect*: It protects the media's shape (Only for non-animated)\n*-round*: Formats media as round\n*-format*: Specifies where to process of a media. (_Available Args:_\n"up" | "rightup" | "right" | "rightbottom" | "bottom" | "leftbottom" | "left" | "leftup" | "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest" | "center" | "centre" | "entropy" | "attention")\n*-fps <number>*: Specifies max frame rate (only for aniamted)\n*-start <mm:ss>*: Specifies video's start time.\n*-end <mm:ss>*: Specifies video's end time.\n*-dontcrop*: Doesn't crops media into a square.\n*-size <number>*: Specifies one edge of video (Video shape is square)\n\n*Examples:*\n%ssticker -protect -round\n%ssticker -protect -format up\n%ssticker -fps 20 -dontcrop -size 256`,
    sticker_args: ["-round", "-protect", "-clean", "-format", "-start", "-end", "-size", "-fps", "-dontcrop"],
    sticker_log_request: `[Sticker] - Sticker requested by %s (%s)`,
    sticker_log_sent: `[Sticker] - Sticker that requested by %s sent successfuly. (%s) (%sms)`,
    sticker_log_error: `[Sticker] - Sticker that requested by %s threw an error. (%s):\n%s`,
    sticker_no_quote: "Dud, use this command captioning a media or quoting a media.  (help sticker)",
    sticker_duration: "This video is longer than 10 secs, Emre Cebeci bot can't guarantee that you will have your sticker in return for videos that longer than 10 secs.",
    sticker_cropPositions: {
        "top": "top",
        "righttop": "right top",
        "right": "right",
        "rightbottom": "right bottom",
        "bottom": "bottom",
        "leftbottom": "left bottom",
        "left": "left",
        "lefttop": "left top",
        "north": "north",
        "northeast": "northeast",
        "east": "east",
        "southeast": "southeast",
        "south": "south",
        "southwest": "southwest",
        "west": "west",
        "northwest": "northwest",
        "center": "center",
        "centre": "centre",
        "entropy": "entropy",
        "attention": "attention"
    },

    ban_usage: "Kicks user from group.\nTo use this command me and executor need to be admin. Use with mentioning someone.",
    ban_error_not_group: "This is not a group chat!",
    ban_error_no_group: "There is no group like this!",
    ban_error_no_member: "Couldn't find that guy!",
    ban_error_no_perm: "I or you don't have permission",
    ban_error_no_mention: "You should mention someone!",

    adminban_usage: "Forbids user from using bot.",
    adminban_successful: "User successfuly restricted!",
    adminunban_usage: "Pardons user from using bot.",
    adminunban_successful: "User successfuly pardoned!",

    trusted_usage: "It adds a group to trusted group list or it removes from trusted group list.\ntrusted add/del",
    trusted_remove_args: ["delete", "remove", "del"],
    trusted_add_args: ["add"],

    setlang_usage: "It changes bot's language. Available languages: %s",
    setlang_successful: "The language of bot changed successfuly!",

    permissions_usage: "Gives permissions to user or gets the permissions of user. Permissions are global.\nperms set/get @tag <add: perm level>",
    permissions_set_args: ["set", "give"],
    permissions_successful: "User's permissions set to: *%s*",
    permissions_user: "User's permissions: %s",

    watchgroup_usage: "Enables listening for deleted messages in a group.",
    watchgroup_successful: "This group will be watched...",
    unwatchgroup_usage: "Disables listening for deleted messages in a group.",
    unwatchgroup_successful: "This group will no longer watched...",

    module_usage: "<|>",

    watchuser_usage: "Enables listening for deleted messages for a user.",
    watchuser_group_successful: "This user will be watched in groups...",
    watchuser_priv_successful: "This user will be watched in private chats...",
    unwatchuser_usage: "Disables listening for deleted messages for a user.",
    unwatchuser_successful: "This user will no longer watched in groups...",
    unwatchuser_priv_successful: "This user will be watched in groups...",

    wiki_usage: "It search in wikipedia!",
    wiki_not_found: "I couldnt find any article about this!",

    module_usage: "Manages bot modules.",

    message_deleted: "*Message Deleted!*\n*By:* %s\n*Date:* %s\n*Message:* %s",

    ytmp3_usage: "Sends youtube vid as audio. May not work sometimes, can't do anything. Easy to use, 'link <yt adress>'",
    ytmp3_too_long: "Please specify a video less than 10 mins:(",
    ytmp3_log_request: "[YTMP3] - Video to audio conversion requested by %s",
    ytmp3_log_sent: "[YTMP3] - Video to audio conversion request by %s sent successfuly. (%s ms)"
}