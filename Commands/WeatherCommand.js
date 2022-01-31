const weather = require('weather-js')

module.exports = {
    name: "weather",
    usage: "weather_usage",
    aliases: ["hava", "havadurumu", "meteroloji"],
    category: "general",
    permissions: 0,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        try {
            const city = args[0];
            weather.find({search: city, degreeType: 'C'}, async function (error, result){
                if(error) throw error;
                var current = result[0].current;
                await client.sendText(message.from, client.format(lang.weather_text, current.observationpoint, current.temperature, current.feelslike, current.winddisplay, current.humidity))
            })
        } catch (err){
            console.log(err)
            await client.reply(message.from, lang.weather_error, message.id)
        }
	}
}