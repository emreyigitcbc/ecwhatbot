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
        "moderation": "Moderasyon",
        "owner": "Sahip"
    },

    help: "```CebeciBot```\n*Yardım Sayfası*\n%s\nKomutlar hakkında detaylı bilgi için: %syardım <komut>",
    help_usage: ":D?",

    stop_usage: "",

    restart_usage: "",
    restart_requested: "[!] Bot modülleri restart istendi!",
    restart_starting: "[!] Bot modülleri yeniden başlatılıyor!",

    chatinfo_usage: "",
    chatinfo_info: "ID: %s\nBAŞLIK: %s\nMETADATA: %s\nTÜR: %s\nPP: %s",

    anime_usage: `Anime fotosu atar %sanime <sağlayıcı/kategori> <sağlayıcı girildiyse: kategori> (sfw/nsfw olarak belirtmenize gerek yok)\nSağlayıcılar ve listeleri:\n%s`,
    waifu_usage: `Waifu fotosu atar %swaifu <(nsfw/sfw)/kategori> <nsfw/sfw girildiyse: kategori> (sfw/nsfw olarak belirtmenize gerek yok)\nKategoriler:\n%s`,

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

    trust_usage: "Bir grubu veya kullanıcıyı güvenli listeye ekler. \ngüven <@etiketler...>",
    trust_user_trusted: "Etiketli kullanıcılara güvenildi!",
    trust_group_trusted: "Bu gruba güvenildi!",

    untrust_usage: "Bir grubu veya kullanıcıyı güvenli listeden siler. \ngüvenme <@etiketler...>",
    untrust_user_untrusted: "Etiketli kullanıcılara olan güvenin kırıldı!",
    untrust_group_untrusted: "Bu gruba olan güvenin kırıldı!",

    setlang_usage: "Botun dilini değiştirmeye yarar.",
    setlang_successful: "Botun dili başarıyla değiştirildi!",

    permissions_usage: "Bir kişiye yetki vermeye yarar. Yetkiler globaldir.\nyetki ekle/çek @etiket <ekle: yetki seviyesi>",
    permissions_set_args: ["belirle", "set"],
    permissions_successful: "Kullanıcının yetkisi %s olarak güncellendi.",
    permissions_failed: "Ayarlamak istediğiniz yetki (%s), sizin yetkinizden (%s) daha küçük olmalı!",
    permissions_user: "Kullanıcının yetkisi: %s",

	on_this_day: "Tarihte Bugün",

	month1: "Ocak",
	month2: "Şubat",
	month3: "Mart",
	month4: "Nisan",
	month5: "Mayıs",
	month6: "Haziran",
	month7: "Temmuz",
	month8: "Ağustos",
	month9: "Eylül",
	month10: "Ekim",
	month11: "Kasım",
	month12: "Aralık",

    otd_usage: "%otd - herhangi bir argüman almadan, tarihte bugün yaşanan olayları wikipedia'dan çeker.",

    wiki_usage: "Wikipediadan arama yapar.",
    wiki_not_found: "Böyle bir wikipedia sayfası bulunamadı!",

    watch_usage: "Bu komutu bir grupta kullanmanız gerekmekte. Kullanım: %sizle <kayıtKanalID> [<@etiketler>] | Çalıştırıldığı grupta silinen mesajlarını yakalamayı @etiketler için aktifleştirir ve kayıtKanalID kanalına loglar. (Kanal ID'lerini almak için /getchatinfo)",
    unwatch_usage: "Bu komutu bir grupta kullanmanız gerekmekte. Kullanım: %sizleme [<@etiketler>] | Çalıştırıldığı grupta silinen mesajlarını yakalamayı @mentions için kapatır.",

    ytmp3_usage: "YouTube videosunu ses olarak gönderir. Bazı durumlarda çalışmayabilir, yapabileceğimiz bir şey yok. Kullanımı çok basit, 'link <yt adresi>'",
    ytmp3_too_long: "Lütfen 10 dakikadan kısa bir video belirt :(",
    ytmp3_log_request: "[YTMP3] - Videodan sese çevirme isteği geldi. (%s)",
    ytmp3_log_sent: "[YTMP3] - Videodan sese çevirme isteği tamamlandı. (%s) (%s ms)",

    message_deleted: "*Mesaj Silindi*\n*Yazar:* ```%s```\n*Mesaj Tarihi:* ```%s```\n*Silinme Tarihi:* ```%s```\n*Türü:* ```%s```\n*İçerik:*\n%s"
}