
# ecwhatbot
Simple and customizable WhatsApp bot with `13` commands!

## Features

- **JSON to store data.**

- Convert images/gifs/videos to sticker, it doesn't need any permission to use, everyone can use it.

- Anime images (including sfw and nsfw with 100+ categories), it is forbidden in groups by default but you can use it in private chats. Only can be used in the groups that in trusted list.

- Converts YouTube videos to audio (max 10 mins, but you can adjust it), everyone can use it.

- Ban command, kicks the mentioned guy from group (Needs admin on host account and executor of command).
- Botban command, bans user from using the bot. To pardon user, use botunban command.
- It has user-specified multi-language system! Every user can change own bot language. By using "setlang" command. Also, you can translate it in your language! Copy one of the language files and rename it to `language.LANG_CODE.js` and change language option in config to LANG_CODE.
- The language option in database is just for console language.

- **It has "Trusted groups system", so if you add a group to trusted groups, everyone in that group can use some sensitive commands. Otherwise they can't use it. (Sensitive commands are: anime, everyone etc.)**
## About Bot

There is a main Help command and you can get help about any command. Just type `/help <command>`. Also you can see command list by typing `/help`.

I switched to JSON from firebase, because I got feedbacks about it is hard to setup and maintain firebase. I also tried to make thing more simpler. You can add more commands if you like.

##### API Refence
- **Users** 
**global.db.users.json:** returns `users.json`
**global.db.users.get(userid):** returns `User` object if exists
**global.db.users.has(userid):** if user exists in database, return true otherwise returns false
**global.db.users.create(userid, ?name):** if user exists in database does nothing, otherwise it creates `User` object and returns it. (name is reserved for future)
---
- **Groups** 
- - **global.db.groups.json:** returns `groups.json`
- - **global.db.groups.get(groupid):** returns `Group` object if exists

- - **global.db.groups.has(groupid):** if user exists in database, return true otherwise returns false
- - **global.db.groups.create(groupid, ?name):** if user exists in database does nothing, otherwise it creates `Group` object and returns it. (name is reserved for future)
---
- **Client** 
- - **global.db.client.json:** returns `client.json`
- - **global.db.client.id:** returns ID of client (reserved for future)
- - **global.db.client.prefix:** returns prefixes
- - **global.db.client.cooldown:** returns cooldown value
- - **global.db.client.settings:** returns extra settings (reserved for future)
- - **global.db.client.language:** returns language code
---
- **Classes** 
- **class User(UserData):**
- - ***id:*** WhatsApp ID of user
- - ***name:*** WhatsApp display name of user
- - ***language:*** User-specific language (en)
- - ***watching:*** reserved for future
- - ***permissions:*** Permissions to use commands (0)
- - ***settings:*** reserved for future ({})
- - ***json:*** Returns `users.json`
- - ***setName(string):*** Changes name of user object.
- - ***setLanguage(string):*** Changes language of user object.
- - ***setWatching(bool):*** Changes watching status of user object.
- - ***setPermissions(int):*** Changes permissions of user object.
- - ***setSettings(object):*** Changes settings of user object.
- **class Group(GroupData):**
- - ***id:*** WhatsApp ID of group
- - ***name:*** WhatsApp display name of group
- - ***language:*** Group-specific language (en)
- - ***safe:*** Trusted status of group (false)
- - ***safe_users:*** Trusted users in this group ([])
- - ***settings:*** reserved for future ({})
- - ***json:*** Returns `groups.json`
- - ***setName(string):*** Changes name of group object.
- - ***setLanguage(string):*** Changes language of group object.
- - ***setSafe(bool):*** Changes safe status of group object.
- - ***setSafeUser(string userId, bool status):*** Changes permissions of group object.
- - ***setSettings(object):*** Changes settings of group object.
- **class Client(ClientData):**
- - ***id:*** WhatsApp ID of host account
- - ***prefix:*** WhatsApp display name of user (/,!)
- - ***language:*** User-specific language (en)
- - ***cooldown:*** Cooldown between commands. (5)
- - ***settings:*** reserved for future ({})
- - ***json:*** Returns `client.json`
- - ***setId(string):*** Changes id of client object.
- - ***setLanguage(string):*** Changes language of client object.
- - ***setPrefix(bool):*** Changes prefixes of client object.
- - ***setCooldown(int):*** Changes cooldown time of client object.
- - ***setSettings(object):*** Changes settings of client object.
---
### Command List
- `N` means, permission required to execute command in groups and private chats.  `T` means, group must be in trusted list.

| COMMAND | ARGUMENTS | DESCRIPTION | REQUIRED PERMISSIONS | TRIGGERS IN |
|---|---|---|---|---|
| anime | <category/provider> <provider: category> | Sends anime photo. | 0 T | private, group |
| ban | @user | Kicks user from group. | 1 | group |
| botban | @user | Forbids user from using bot. | 10 | group |
| botunban | @user | Pardons user from using bot. | 10 | group |
| help | empty or command | Shows information about command or all commands. | 0 | private, group |
| everyone | message | Tags everyone in group and sends the specified message. | 2 T | group |
| permission | set/@user set: permission number | Sets or gets user permission. | ALL | group |
| sticker | Explained below. | Converts images/gifs/videos to sticker. | 0 | private, group |
| trust | empty or @mentions | Adds group or users to trusted list. | 10 | group |
| untrust | empty or @mentions | Removes group or users from trusted list. | 10 | group |
| wiki | topic | Gets article from wikipedia. | 0 | private, group |
| youtube | url | Converts youtube video to sound. | 0 | private, group |
| setlang | language code | Changes own bot language. | 0 | private, group |

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

## Installing and First Start

- Installing modules:
```batch
npm install
```
- Now your bot is ready to work!
- In the console, it will ask you to scan QR code. You can scan it and continue.
- After first start, you can add more prefixes, change cooldown seconds or change language from JSON files. You must restart the bot to see changes.
- `client.json` stores prefix, language data, cooldown...
