module.exports = {
    language: "tr",

    loading_event_count: "%s event yükleniyor...",
    loading_command_count: "%s komut yükleniyor...",
    event_loaded: "Event '%s' (%s) başarıyla yüklendi.",
    events_loaded: "Eventler başarıyla yüklendi!",
    command_loaded: "Komut '%s' (%s) başarıyla yüklendi. [%s]",
    commands_loaded: "Komutlar başarıyla yüklendi!",
    langs_found: "%s dil dosyası bulundu. (%s)",
    no_event: "HİÇ EVENT BULUNAMADI!",
    no_command: "HİÇ KOMUT BULUNAMADI!",
    no_langs: "HİÇ DİL DOSYASI BULUNAMADI!",

    categories: {
        "fun": "Eğlence",
        "general": "Genel",
        "moderation": "Moderasyon"
    },

    help: "```CebeciBot```\n*Yardım Sayfası*\n%s\nKomutlar hakkında detaylı bilgi için: %syardım <komut>",
    help_usage: ":D?",

    anime_usage: `anime <sağlayıcı/kategori> <sağlayıcı girildiyse: kategori>\nSağlayıcılar ve listeleri:\n*HMtai*\nwallpaper, mobileWallpaper, neko, jahy, lick, slap, ass, bdsm, cum, creampie, manga, femdom, hentai, incest, masturbation, public, ero, orgy, elves, yuri, pantsu, glasses, cuckold, blowjob, boobjob, foot, thighs, vagina, ahegao, uniform, gangbang, tentacles, gif, nsfwNeko, nsfwMobileWallpaper, zettaiRyouiki\n*Nekos*\npat, hug, kiss, cry, slap, smug, punch, neko, kitsune, waifu, hentai, neko, lesbian, kuni, classic, boobs, blowjob, anal, yuri, trap, tits, femdom, feet, pussy, ero, erofeet, erokitsu, erokemo, eroyuri, eroneko, ledwkitsu, lewdneko, lewdkemo, bj, pwankg, cum, keta, spank, pussyJpg, cumJpg, avatar, wallpaper, holoero, hololewd, futarani, gasm, foxgirl\n*NekoLove*\npat, hug, kiss, cry, slap, smug, punch, neko, kitsune, waifu, nekolewd\n*Miss*\nhug, kiss, cry, kill, view, dance, pussy, boobs, ero`,

    weather_usage: "hava <şehir>",
    weather_error: "Bir hata meydana geldi, lütfen daha sonra tekrar deneyiniz.",
    weather_text: `*%s için hava tahmini*\n*Sıcaklık:* %s°C\n*Hissedilen:* %s°C\n*Rüzgar:* %s\n*Nem:* %%s`,

    send_usage: "mesajat <kişi adı/numara> <mesaj....>",
    send_wrong_password: "Yanlış şifre knk",
    send_ok: "Gönderdim knk",
    send_not_found: "Böle birini bulamadım knk ?",
    send_verify_arg: "onayla",
    send_verify_pending: "Tamam isteğin alındı, onaylaman gerekiyor tek.\n*Mesajın gideceği kişi:* %s\n*Mesaj:* %s",

    sticker_usage: `*Bir resmi/videoyu/gifi alıntılayarak veya göndermeden önce altına yazarak kullanılır.*\n*Alabileceği argümanlar:*\n*-koru*: Medyanın biçimini korur. (Sadece HAREKETSİZ ÇIKARTMALARDA kullanılır)\n*-dairesel*: (Medyayı dairesel bir şekilde biçimlendirir.)\n*-biçim*: Medyanın ne tarafını işlemesi gerektiğini belirtir. (_Alabileceği değerler:_\n"yukarı" | "sağyukarı" | "sağ" | "sağaşağı" | "aşağı" | "solaşağı" | "sol" | "solyukarı" | "kuzey" | "kuzeydoğu" | "doğu" | "güneydoğu" | "güney" | "güneybatı" | "batı" | "kuzeybatı" | "merkez" | "ortala" | "entropi" | "dikkat")\n*-fps <sayı>*: GIF veya videonun saniyedeki kare hızını belirler.\n*-başlangıç <dd:ss>*: Videonun başlangıç zamanını belirlemek için kullanılır.\n*-bitiş <dd:ss>*: Videonun bitiş zamanını belirlemek için kullanılır.\n*-kırpma*: Videonun ortalanıp kırpılmasını deaktif eder.\n*-boyut <sayı>*: Videonun bir kenarının pixel sayısını belirtir. (Video kare şeklinde çıkar)\n\n*Örnek kullanım:*\n%ssticker -koru -dairesel\n%ssticker -koru -biçim yukarı\n%ssticker -fps 20 -kırpma -boyut 256`,
    sticker_args: ["-dairesel", "-koru", "-temizle", "-biçim", "-başlangıç", "-bitiş", "-boyut", "-fps", "-kırpma"],
    sticker_log_request: `[Sticker] - %s Tarafından sticker isteği geldi. (%s)`,
    sticker_log_sent: `[Sticker] - %s Tarafından istenen sticker, başarıyla gönderildi. (%s) (%sms)`,
    sticker_log_error: `[Sticker] - %s Tarafından istenen sticker işlenirken hata (%s):\n%s`,
    sticker_no_quote: "Ab bisi alıntılayarak kullan veya fotonun/videonun/gifi atarken altına yaz bu komudu tm mı?  (yardım sticker)",
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

    ban_usage: "Kullanıcıyı gruptan atmaya yarar.\nKomudu kullanabilmek için hem benim hem de kullanan kişinin yetkisi olması gerek. Bir kişiyi etiketleyerek kullanılır.\nban @etiket",
    ban_error_not_group: "Bu bir grup sohbeti değil!",
    ban_error_no_group: "Böyle bir grup yok!",
    ban_error_no_member: "Böyle birisi bu grupta yok!",
    ban_error_no_perm: "Adamı banlıcak yetkin/yetkim yok knk",
    ban_error_no_mention: "Bir kişiyi etiketlemelisin!",

    adminban_usage: "Kullanıcıyı botu kullanmaktan alıkoyar.",
    adminban_successful: "Kullanıcı başarıyla yasaklandı!",
    adminunban_usage: "Botu kullanması alıkonulmuş kullanıcıya tekrar botu kullanma izni verir.",
    adminunban_successful: "Kullanıcının yasağı başarıyla kalktı!",

    trusted_usage: "Bir grubu güvenli listeye eklemeye veya güvenli listeden çıkarmaya yarar.\ngüvenli ekle/sil",
    trusted_remove_args: ["sil", "çıkar", "delete"],
    trusted_add_args: ["ekle"],

    setlang_usage: "Botun dilini değiştirmeye yarar.",
    setlang_successful: "Botun dili başarıyla değiştirildi!",

    permissions_usage: "Bir kişiye yetki vermeye yarar. Yetkiler globaldir.\nyetki ekle/çek @etiket <ekle: yetki seviyesi>",
    permissions_set_args: ["belirle", "set"],
    permissions_successful: "Kullanıcının yetkisi %s olarak güncellendi.",
    permissions_user: "Kullanıcının yetkisi: %s",

    watchgroup_usage: "Bir grupta olan olayları izlemeyi aktifleştirir.",
    watchgroup_successful: "Bu grup artık izlenecek...",
    unwatchgroup_usage: "Bir grupta olan olayları izlemeyi kapatır.",
    unwatchgroup_successful: "Bu grup artık izlenmeyecek...",

    module_usage: "<|>",

    watchuser_usage: "Kullanıcının gruptalardaki silinen mesajlarını takip etmeyi etkinleştirir.",
    watchuser_group_successful:  "Bu kullanıcı artık gruplarda izlenecek...",
    watchuser_priv_successful:  "Bu kullanıcı artık özel sohbetlerde izlenecek...",
    unwatchuser_usage: "Kullanıcının gruptalardaki silinen mesajlarını takip etmeyi kapatır.",
    unwatchuser_group_successful: "Bu kullanıcı artık gruplarda izlenmeyecek...",
    unwatchuser_priv_successful: "Bu kullanıcı artık özel sohbetlerde izlenmeyecek...",

    wiki_usage: "Wikipediadan arama yapar.",
    wiki_not_found: "Böyle bir wikipedia sayfası bulunamadı!",

    module_usage: "Bot modüllerini yönetir.",

    message_deleted: "*Mesaj Silindi!*\n*Silen:* %s\n*Silinme Tarihi:* %s\n*Mesaj:* %s",

    ytmp3_usage: "YouTube videosunu ses olarak gönderir. Bazı durumlarda çalışmayabilir, yapabileceğimiz bir şey yok. Kullanımı çok basit, 'link <yt adresi>'",
    ytmp3_too_long: "Lütfen 10 dakikadan kısa bir video belirt :(",
    ytmp3_log_request: "[YTMP3] - Videodan sese çevirme isteği geldi. (%s)",
    ytmp3_log_sent: "[YTMP3] - Videodan sese çevirme isteği tamamlandı. (%s) (%s ms)"
}