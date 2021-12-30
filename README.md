# ecwhatbot
Simple Customizable WhatsApp Bot

## Features
- Convert images/gifs/videos to sticker, it doesn't need any permission to use, everyone can use it.
- Anime images (including sfw and nsfw with 100+ categories), it is forbidden in groups by default but you can use it in private chats. Only can be used in the groups in trusted list and also people whose permission is higher than 998 can use it.
- Weather report for city command, everyone can use it.
- Convert youtube video to audio (max 10 mins,  but you can adjust it), everyone can use it.
- Ban command, kicks the mentioned guy from group (Needs admin on host account and executor of command), only people whose permission is higher than 998 can use it.
- Trusted groups command so if you add your group to trusted groups, everyone in that group can use anime command otherwise they can't.
- Also it supports multi-lang! You can translate it in your language! Copy one of the language files and rename it to `language.LANG_CODE.js` and chane language option in config to LANG_CODE.

## About Bot
There is a main Help command and you can get help about any command. Just type `/help <command>`. Also you can see command list by typing `/help`.

Maybe you can't understand sticker command but it is really easy to use. Mention a photo/gif/video by typing `/sticker <options>`. But the thing is there are many options! (Background remover not working for now.)

##### Sticker Options:
- **-clean**: Clears background. (Only for non-animated)
- **-protect**: It protects the media's shape (Only for non-animated)
- **-round**: Formats media as round
- **-format**: Specifies where to process of a media. (__Available Args:__ "up" | "rightup" | "right" | "rightbottom" | "bottom" | "leftbottom" | "left" | "leftup" | "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest" | "center" | "centre" | "entropy" | "attention")
- **-fps <number>**: Specifies max frame rate (only for aniamted)
- **-start <mm:ss>**: Specifies video's start time.
- **-end <mm:ss>**: Specifies video's end time.
- **-dontcrop**: Doesn't crops media into a square.
- **-size <number>**: Specifies one edge of video (Video shape is square)

## Installing
Type these in terminal or command console then bot will start working.
```batch
npm i
npm start
```
