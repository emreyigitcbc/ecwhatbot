const { prefix } = require("./config.json")
module.exports = {
    tr: {
        bot_started: "BOT BAŞARIYLA BAŞLATILDI. ŞİMDİ EVENT VE KOMUTLAR YÜKLENECEK.",
        loading_event_count: "%s event yükleniyor...",
        loading_command_count: "%s komut yükleniyor...",
        event_loaded: "Event '%s' (%s) başarıyla yüklendi.",
        events_loaded: "Eventler başarıyla yüklendi!",
        command_loaded: "Komut '%s' (%s) başaryıla yüklendi. [%s]",
        commands_loaded: "Komutlar başarıyla yüklendi!",
        no_event: "HİÇ EVENT BULUNAMADI!",
        no_command: "HİÇ KOMUT BULUNAMADI!",

        help: [
			`*Emre Cebeci Bot*`,
			`Yardım Sayfası\n`,
			`*1-* _${prefix}sticker_ : Atılan/alıntılanan resmi/videoyu/gifi stickere çevirir. `,
			`*2-* _${prefix}ban @kullanıcı_ : Etiketlenen kişiyi gruptan atar. (Kullanan kişinin ve benim yetkim olması gerek)`,
			`*3-* _${prefix}tdk <kelime>_ : Kelimenin TDK anlamını döndürür.`,
            `*4-* _${prefix}hava <şehir>_ : Şehrin hava durumu bilgisini döndürür.`,
            `*5-* _${prefix}link <YT linki>_ : YouTube videosunu sese çevirir.`,
            `*6-* _${prefix}anime_ : Anime kızı gönderir.`,
            `\nKomutlar hakkında detaylı bilgi için: ${prefix}yardım <komut>`,
			`\nBotu kullandığınız için tşkler :wink:`
		],

        anime_usage: `anime <kategori>: NSFW veya SFW anime gönderir. (Kategoriler: < "nsfwmobilewallpaper" | "nsfwneko" | "gif" | "tentacles" | "gangbang" | "uniform" | "ahegao" | "vagina" | "thighs" | "foot" | "boobjob" | "blowjob" | "cuckold" | "glasses" | "pantsu" | "yuri" | "elves" | "orgy" | "ero" | "public" | "masturbation" | "incest" | "hentai" | "femdom" | "manga" | "creampie" | "cum" | "bdsm" | "ass" | "wallpaper" | "slap" | "lick" | "jahy" | "neko" >)`,

        tdk_usage: "tdk <kelime>",
        tdk_not_found: "Maalesef herhangi bir sonuç bulunamadı.",

        weather_usage: "hava <şehir>",
        weather_error: "Bir hata meydana geldi, lütfen daha sonra tekrar deneyiniz.",
        weather_text: `*%s için hava tahmini*\n*Sıcaklık:* %s°C\n*Hissedilen:* %s°C\n*Rüzgar:* %s\n*Nem:* %%`,

        sticker_usage: `*Bir resmi/videoyu/gifi alıntılayarak veya göndermeden önce altına yazarak kullanılır.*\n*Alabileceği argümanlar:*\n*-koru*: Medyanın biçimini korur. (Sadece HAREKETSİZ ÇIKARTMALARDA kullanılır)\n*-dairesel*: (Medyayı dairesel bir şekilde biçimlendirir.)\n-*biçim*: Medyanın ne tarafını işlemesi gerektiğini belirtir. (_Alabileceği değerler:_\n"yukarı" | "sağyukarı" | "sağ" | "sağaşağı" | "aşağı" | "solaşağı" | "sol" | "solyukarı" | "kuzey" | "kuzeydoğu" | "doğu" | "güneydoğu" | "güney" | "güneybatı" | "batı" | "kuzeybatı" | "merkez" | "ortala" | "entropi" | "dikkat")\n*-fps <sayı>*: GIF veya videonun saniyedeki kare hızını belirler.\n*-başlangıç <dd:ss>*: Videonun başlangıç zamanını belirlemek için kullanılır.\n*-bitiş <dd:ss>*: Videonun bitiş zamanını belirlemek için kullanılır.\n*-kırpma*: Videonun ortalanıp kırpılmasını deaktif eder.\n*-boyut <sayı>*: Videonun bir kenarının pixel sayısını belirtir. (Video kare şeklinde çıkar)\n\n*Örnek kullanım:*\n${prefix}sticker -koru -dairesel\n${prefix}sticker -koru -biçim yukarı\n${prefix}sticker -fps 20 -kırpma -boyut 256`,
        sticker_args: ["-dairesel", "-koru", "-temizle", "-biçim", "-başlangıç", "-bitiş", "-boyut", "-fps", "-kırpma"],
        sticker_log_request: `[Sticker] - %s Tarafından sticker isteği geldi. (%s)`,
        sticker_log_sent:`[Sticker] - %s Tarafından istenen sticker, başarıyla gönderildi. (%s) (%sms)`,
        sticker_log_error:`[Sticker] - %s Tarafından istenen sticker işlenirken hata (%s):\n%s`,
        sticker_no_quote: "Ab bisi alıntılayarak kullan veya fotonun/videonun/gifi atarken altına yaz bu komudu tm mı?  (" + prefix + "yardım sticker)",
        sticker_duration: "Bu video 10 saniye veya 10 saniyeden uzun. Emre Cebeci bot 10 saniyeden uzun videolar için stickere çevrilme garantisi veremez.",
        sticker_cropPositions: {
            "yukarı": "top",
            "sağyukarı": "right top",
            "sağ": "right",
            "sağaşağı": "right bottom",
            "aşağı": "bottom",
            "solaşağı": "left bottom",
            "sol": "left",
            "solyukarı": "left top",
            "kuzey": "north",
            "kuzeydoğu": "northeast",
            "doğu": "east",
            "güneydoğu": "southeast",
            "güney": "south",
            "güneybatı": "southwest",
            "batı": "west",
            "kuzeybatı": "northwest",
            "merkez": "center",
            "ortala": "centre",
            "entropi": "entropy",
            "dikkat": "attention"
        },

        ban_usage: "Kullanıcıyı gruptan atmaya yarar.\nKomudu kullanabilmek için hem benim hem de kullanan kişinin yetkisi olması gerek. Bir kişiyi etiketleyerek kullanılır.",
        ban_error_not_group: "Bu bir grup sohbeti değil!",
        ban_error_no_group: "Böyle bir grup yok!",
        ban_error_no_member: "Böyle birisi bu grupta yok!",
        ban_error_no_perm: "Adamı banlıcak yetkin/yetkim yok knk",
        ban_error_no_mention: "Bir kişiyi etiketlemelisin!",

        ytmp3_usage: "YouTube videosunu ses olarak gönderir. Bazı durumlarda çalışmayabilir, yapabileceğimiz bir şey yok. Kullanımı çok basit, 'link <yt adresi>'",
        ytmp3_too_long: "Lütfen 10 dakikadan kısa bir video belirt :(",
        ytmp3_log_request: "[YTMP3] - Videodan sese çevirme isteği geldi. (%s)",
        ytmp3_log_sent: "[YTMP3] - Videodan sese çevirme isteği tamamlandı. (%s) (%s ms)"
    },
    en: {
        bot_started: "BOT STARTED SUCCESFULLY. NOW WILL LOAD EVENTS AND COMMANDS.",
        loading_event_count: "Loading %s events...",
        loading_command_count: "Loading %s commands...",
        event_loaded: "Event '%s' (%s) loaded succesfully.",
        events_loaded: "Events loaded succesfully!",
        command_loaded: "Command '%s' (%s) loaded succesfully. [%s]",
        commands_loaded: "Commands loaded succesfully!",
        no_event: "NO EVENT FOUND!",
        no_command: "NO COMMAND FOUND!",

        help: [
			`*Emre Cebeci Bot*`,
			`Help Page\n`,
			`*1-* _${prefix}sticker_ : Turn your media to sticker.`,
			`*2-* _${prefix}ban @member_ : Kicks the user that mentioned. (Me and the executer need admin)`,
            `*3-* _${prefix}dict <word>_ : Sends word's meaning in Turkish Language dictionary.`,
            `*4-* _${prefix}weather <city>_ : Sends city's weather report..`,
            `*5-* _${prefix}link <YT link>_ : Turns youtube vid to audio.`,
            `*6-* _${prefix}anime_ : Sends anime girl :kawai:`,
			`\nFor detailed info about commands: ${prefix}help <command>`,
			`\nThx for using :wink:`
		],

        anime_usage: `anime <cateogry>: Sends nsfw or sfw anime girl (Categories: < "nsfwmobilewallpaper" | "nsfwneko" | "gif" | "tentacles" | "gangbang" | "uniform" | "ahegao" | "vagina" | "thighs" | "foot" | "boobjob" | "blowjob" | "cuckold" | "glasses" | "pantsu" | "yuri" | "elves" | "orgy" | "ero" | "public" | "masturbation" | "incest" | "hentai" | "femdom" | "manga" | "creampie" | "cum" | "bdsm" | "ass" | "wallpaper" | "slap" | "lick" | "jahy" | "neko" >)`,

        tdk_usage: "dict <word>",
        tdk_not_found: "Couldn't find any result.",

        weather_usage: "weather <city>",
        weather_error: "An error occured, please try again later.",
        weather_text: `*Weather report for %s*\n*Temperature:* %s°C\n*Feels:* %s°C\n*Wind:* %s\n*Humidity:* %s%`,

        sticker_usage: `*Using by quoting a media or captioning a media.*\n*Available Arguments That It Can Take:*\n*-protect*: It protects the media's shape (Only for non-animated)\n*-round*: Formats media as round\n*-format*: Specifies where to process of a media. (_Available Args:_\n"up" | "rightup" | "right" | "rightbottom" | "bottom" | "leftbottom" | "left" | "leftup" | "north" | "northeast" | "east" | "southeast" | "south" | "southwest" | "west" | "northwest" | "center" | "centre" | "entropy" | "attention")\n*-fps <number>*: Specifies max frame rate (only for aniamted)\n*-start <mm:ss>*: Specifies video's start time.\n*-end <mm:ss>*: Specifies video's end time.\n*-dontcrop*: Doesn't crops media into a square.\n*-size <number>*: Specifies one edge of video (Video shape is square)\n\n*Examples:*\n${prefix}sticker -protect -round\n${prefix}sticker -protect -format up\n${prefix}sticker -fps 20 -dontcrop -size 256`,
        sticker_args: ["-round", "-protect", "-clean", "-format", "-start", "-end", "-size", "-fps", "-dontcrop"],
        sticker_log_request: `[Sticker] - Sticker requested by %s (%s)`,
        sticker_log_sent:`[Sticker] - Sticker that requested by %s sent succesfully. (%s) (%sms)`,
        sticker_log_error:`[Sticker] - Sticker that requested by %s threw an error. (%s):\n%s`,
        sticker_no_quote: "Dud, use this command captioning a media or quoting a media.  (" + prefix + "help sticker)",
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

        ytmp3_usage: "Sends youtube vid as audio. May not work sometimes, can't do anything. Easy to use, 'link <yt adress>'",
        ytmp3_too_long: "Please specify a video less than 10 mins:(",
        ytmp3_log_request: "[YTMP3] - Video to audio conversion requested by %s",
        ytmp3_log_sent: "[YTMP3] - Video to audio conversion request by %s sent succesfully. (%s ms)"
    }
}