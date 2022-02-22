
# ecwhatbot
Simple, customizable, firebase WhatsApp bot with `20` commands!

## Features

- **It uses  Firebase Realtime Database as database.**

- Convert images/gifs/videos to sticker, it doesn't need any permission to use, everyone can use it.

- Anime images (including sfw and nsfw with 100+ categories), it is forbidden in groups by default but you can use it in private chats. Only can be used in the groups that in trusted list.

- Weather report for city command, everyone can use it.

- Converts YouTube videos to audio (max 1 mins, but you can adjust it), everyone can use it.

- Ban command, kicks the mentioned guy from group (Needs admin on host account and executor of command).
- Botban command, bans user from using the bot. To pardon user, use botunban command.
- Listens for deleted messages and sends them back in specified groups and private chats. (Group must be in trusted list + must be listened with "watchgroup" command; private chats must be listened with "watchuser" command)
  - If you want to blacklist users, you can use "unwatch @user"
  - To rewatch his deleted messages, you can user "watch @user"
- Cooldown system that prevents spams!
- Did you forget your phone at home? Send yourself a message from your friend's phone (with password, default password is `P@SSW0RD`), and it will send a message to your specified contact.
- It has user-specified multi-language system! Every user can change own bot language. By using "setlang" command. Also, you can translate it in your language! Copy one of the language files and rename it to `language.LANG_CODE.js` and change language option in config to LANG_CODE.
- The language option in database is just for console language.

- Vote command that makes whatsapp groups more democratic.

- **It has "Trusted groups system", so if you add a group to trusted groups, everyone in that group can use some sensitive commands. Otherwise they can't use it. (Sensitive commands are: anime, everyone etc.)**
- **If you are using modded whatsapp, you must set "multiDevice" to true (`index.js`) and join multi device beta program from whatsapp. Otherwise it won't detect deleted messages. If you're not using modded whatsapp, I recommend you to set it false.**
## About Bot

There is a main Help command and you can get help about any command. Just type `/help <command>`. Also you can see command list by typing `/help`.


### Command List
- `Ng` and `Np` means, group and private.  `T` means, group must be in trusted list.


| COMMAND | ARGUMENTS | DESCRIPTION | REQUIRED PERMISSIONS | TRIGGERS IN |
|---|---|---|---|---|
| anime | <category/provider> <provider: category> | Sends anime photo. | 0p, (T+0)g | private, group |
| ban | @user | Kicks user from group. | 5g | group |
| botban | @user | Forbids user from using bot. | 10g | group |
| botunban | @user | Pardons user from using bot. | 10g | group |
| help | command | Shows information about command or all commands. | 0p, 0g | private, group |
| everyone | message | Tags everyone in group and sends the specified message. | (5+T)g | group |
| modules | reload/load/unload load,unload: module name | This command is only for developers. | 999p, 999g | private, group |
| permission | set/@user set: permission number | Sets or gets user permission. | 10g | group |
| sendmessage | contact name or number/password/message | Sends a message to host's contact. | 0g, 0p | private, group |
| sticker | Explained below. | Converts images/gifs/videos to sticker. | 0g, 0p | private, group |
| trusted | add/remove | Adds or removes group from trusted groups list. | 10g | group |
| watchgroup |  | Enables listening for "deleted messages" in a group. | 10g | group |
| unwatchgroup |  | Disables listening for "deleted messages" in a group. | 10g | group |
| watchuser | @user (empty in private) | Enables listening for "deleted messages" for user. | 10p, 10g | private, group |
| unwatchuser | @user (empty in private) | Disables listening for "deleted messages" for user. | 10p, 10g | private, group |
| weather | location | Gets current weather data for specified location. | 0p, 0g | private, group |
| wiki | topic | Gets article from wikipedia. | 0p, 0g | private, group |
| youtube | url | Converts youtube video to sound. | 0p, 0g | private, group |
| setlang | language code | Changes own bot language. | 0p, 0g | private, group |
| vote | option1/option2 (optional options) | Creates voting. | 0p, 0g | group |


- Maybe you can't understand sticker command but it is really easy to use. Mention a photo/gif/video by typing `/sticker <options>`. But the thing is there are many options! (Background remover not working for now.)

  

##### Sticker Options:

-  **-clean**: Clears background. (Only for non-animated)

-  **-protect**: It protects the media's shape (Only for non-animated)

-  **-round**: Formats media as round

-  **-format**: Specifies where to process of a media. (__Available Args:__ "up" | "rightup" | "right" | "rightbottom" | "bottom" | "leftbottom" | "left" | "leftup" | "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest" | "center" | "centre" | "entropy" | "attention")

-  **-fps <number>**: Specifies max frame rate (only for aniamted)

-  **-start <mm:ss>**: Specifies video's start time.

-  **-end <mm:ss>**: Specifies video's end time.

-  **-dontcrop**: Doesn't crops media into a square.

-  **-size <number>**: Specifies one edge of video (Video shape is square)

##### Vote Options:
- **-timer**: Sets timer for vote. Example: 10s, 10secs, 10min, 10m, 10h, 24h, 1d...
- **-max**: Sets vote limit for vote. Example: /vote option1/option2 -max 3 -timer 30m
- **-end**: Ends vote in that group. Example: /vote -end
  
  
Example usage of vote command: /vote World is flat/World is cubic -timer 15m -max 15
Example usage of send command: /send Mother/superSecretPasword/hi mom, i will be late!
Then, it will ask you to verify. You can simply verify it by typing /send verify or to delete, /send delete

## Installing and First Start

Install modules and `ffmpeg` (for youtube command, must be installed externally).
- Installing modules:
```batch
npm i
```

- To setup firebase, you must turn on `Realtime Database` in dashboard and create a service account.
- After that, open `index.js` and replace `serviceAccount` variable with your own credentials.
- Now your bot is ready to work!
- Never edit `default_config.json`, you must do changes in firebase.
- After first start, you can add more prefixes, change cooldown seconds or change language in firebase. They will change instantly.
