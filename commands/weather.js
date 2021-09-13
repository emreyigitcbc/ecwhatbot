const config = require("../config.json")
const lang = require("../language.js")[config.language]
const weather = require('weather-js')
const util = require("util")

module.exports = {
    name: "weather",
    usage: lang.weather_usage,
    aliases: ["hava", "havadurumu", "meteroloji"],

    async run(bot, message, args) {
        try {
            const city = args[0];
            weather.find({search: city, degreeType: 'C'}, async function (error, result){
                if(error) throw error;
                var current = result[0].current;
                await bot.sendText(message.from, util.format(lang.weather_text, current.observationpoint, current.temperature, current.feelslike, current.winddisplay, current.humidity))
            })
        } catch (err){
            console.log(err)
            await bot.reply(message.from, lang.weather_error, message.id)
        }
	}
}