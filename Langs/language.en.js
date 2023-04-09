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
    no_langs: "NO LANG FILE FOUND",

    categories: {
        "fun": "Fun",
        "general": "General",
        "moderation": "Moderation",
        "owner": "Owner"
    },
    
    help: "```CebeciBot```\n*Help Page*\n%s\nFor detailed information about commands: %shelp <command>",
    help_usage: ":D?",

    stop_usage: "",

    restart_requested: "[!] Bot modules restart requested!",
    restart_starting: "[!] Bot modules restarting!",
    restart_usage: "",

    chatinfo_usage: "",
    chatinfo_info: "ID: %s\nTITLE: %s\nMETADATA: %s\nKIND: %s\nPP: %s",

    anime_usage: `Sends anime pic %sanime <provider/category> <if provider provided: category> (Don't need to specify nsfw/sfw)\nProviders and lists:\n%s`,
    waifu_usage: `Sends waifu pic %swaifu <(nsfw/sfw)/category> <if nsfw/sfw provided: category> (Don't need to specify nsfw/sfw)\nCategories:\n%s`,

    nudify_usage: "Creates DeepFake image of sent photo. (w/DreamPower https://github.com/opendreamnet/dreampower) Use it below a photo or quote.",
    nudify_already_started: "(!) You already have a started process.",
    nudify_success: "Here you gooo!",
    nudify_error: "(!) Dude, an error accured. would you like to try another photo?",
    nudify_started: `(!) Process is starting, your place in queue is: %s, have fun!`,
    nudify_log_started: "[!] DeepFake process requested (%s)",
    nudify_log_file_saved: "[!] Raw file saved as %s",
    nudify_log_success_file: "[!] DeepFake file saved as %s",
    nudify_log_success: "[!] DeepFake process ended successfully (%s) (%s secs)",
    nudify_log_error: "[!] DeepFake process ended with errors (%s) (%s secs)",

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

    trust_usage: "It adds a group or user to trusted list. \ntrust <@tags...>",
    trust_user_trusted: "User successfully trusted!",
    trust_group_trusted: "Group successfully trusted!",

    untrust_usage: "It removes a group or user from trusted list. \nuntrust <@tags...>",
    untrust_user_untrusted: "User successfully untrusted!",
    untrust_group_untrusted: "Group successfully untrusted!",

    setlang_usage: "It changes bot's language. Available languages: %s",
    setlang_successful: "The language of bot changed successfuly!",

    permissions_usage: "Gives permissions to user or gets the permissions of user. Permissions are global.\nperms set/get @tag <add: perm level>",
    permissions_set_args: ["set", "give"],
    permissions_successful: "User's permissions set to: *%s*",
    permissions_failed: "The permission that you want to set (%s) must be lower than yours! (%s)",
    permissions_user: "User's permissions: %s",

    wiki_usage: "It search in wikipedia!",
    wiki_not_found: "I couldnt find any article about this!",

    ytmp3_usage: "Sends youtube vid as audio. May not work sometimes, can't do anything. Easy to use, 'link <yt adress>'",
    ytmp3_too_long: "Please specify a video less than 10 mins:(",
    ytmp3_log_request: "[YTMP3] - Video to audio conversion requested by %s",
    ytmp3_log_sent: "[YTMP3] - Video to audio conversion request by %s sent successfuly. (%s ms)",

    message_deleted: "*Message Deleted*\nBy/Whose: %s\nMessage Date: %s\nDelete Date: %s\nType: %s\nContent:\n%s"

}