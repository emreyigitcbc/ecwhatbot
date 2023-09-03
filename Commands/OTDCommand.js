const wiki = require('wikijs').default;

module.exports = {
    name: "otd",
    aliases: [],
    usage: "otd_usage",
    category: "general",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {

		// Get and decleare dates
		var date = new Date();
		var month = Number(date.getMonth());
		var year = Number(date.getFullYear());
		var day = Number(date.getDate());
		var month_t = "";
		// Changing months numbers to strings because wikipedia wants that
		// If the wikipedia in your language wants another way, you may need to edit code.
		if(month == 0) month_t = lang.month1;
		if(month == 1) month_t = lang.month2;
		if(month == 2) month_t = lang.month3;
		if(month == 3) month_t = lang.month4;
		if(month == 4) month_t = lang.month5;
		if(month == 5) month_t = lang.month6;
		if(month == 6) month_t = lang.month7;
		if(month == 7) month_t = lang.month8;
		if(month == 8) month_t = lang.month9;
		if(month == 9) month_t = lang.month10;
		if(month == 10) month_t = lang.month11;
		if(month == 11) month_t = lang.month12;
		
		wikidate = month_t + "_" + day;
		
		// The "page_tag" is the second most very important variable because
		// it decleares the wikipedia page that OTD contents are available.
		// For Turkish:
		// var page_tag = "Şablon:Tarihte_bugün/" + wikidate
		var page_tag = wikidate;
		// Embed colors, you may add HEX colors too.
		// If you want on this day messages in English, you do not change wikipedia api url but
		// If you want from another language, you have to change api url to your language.
		// Ex: For Turkish you have to change it to "tr"
		wiki({ apiUrl: `https://${lang.language}.wikipedia.org/w/api.php` }).page(page_tag).then(page => page.rawContent()).then(function (wikicontent){
			// For Turkish! in Turkish wikipedia, there are some bugs about line breaks.
			wikicontent = wikicontent.replace("Doğumlar","```\n\n**Doğumlar**```").replace("Ölümler","```\n\n**Ölümler**```").replace("Olmonthlar","**Olmonthlar**```")+"```";
			// The English version of Wikipedia's on this day is very long, I do not recommend to replace things but you may try.
			// Checks if content is longer than 2000
			// We do this because Discord message length limit is 2000 and we have to split else send it.
			client.sendText(message.from, `${lang.on_this_day} (${day} ${month_t} ${year})\n${wikicontent}`)
		});
}

}
