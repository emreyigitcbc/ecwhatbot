const lang = require(`./Langs/language.${global.db.client.language}.js`)
const fs = require("fs");
require('colors');

module.exports = (bot) => {
    // EVENTS
    bot.modules = ["handler.js"]
    bot.langs = []
    bot.commands = new Map();
    bot.commands_list = { fun: [], general: [], moderation: [], owner: [] }
    bot.cooldown = new Map();
    bot.nudify_queue = [];
    bot = Object.assign(bot, require("./functions"));
    fs.readdir("./Events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js" && !f.startsWith("!"));
        if (eventFiles.length <= 0) return console.log(lang.no_event.red);
        console.log(lang.loading_event_count.yellow, eventFiles.length);
        eventFiles.forEach((f, i) => {
            bot.modules.push("Events/" + f)
            prop = require(`./Events/${f}`);
            console.log(lang.event_loaded.yellow, prop.name, f)
        });
        console.log(lang.events_loaded.green);
    });
    // COMMANDS
    fs.readdir("./Commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js" && !f.startsWith("!"));
        if (cmdFiles.length <= 0) return console.log(lang.no_command.red);
        console.log(lang.loading_command_count.yellow, cmdFiles.length);
        cmdFiles.forEach((f, i) => {
            var props = require(`./Commands/${f}`);
            bot.modules.push("Commands/" + f)
            console.log(lang.command_loaded.yellow, props.name, f, props.aliases.join(", "))
            bot.commands.set(props.name, props);
            if (!props.hasOwnProperty("aliases")) {
                bot.commands_list[props.category].push(props.name);
            } else {
                if (props.aliases.length > 0) {
                    bot.commands_list[props.category].push(props.name + " (" + props.aliases.join(", ") + ")");
                    props.aliases.forEach(alias => {
                        bot.commands.set(alias, props);
                    });
                } else {
                    bot.commands_list[props.category].push(props.name);
                }
            }
        });
        console.log(lang.commands_loaded.green);
    });
    // LANGUAGES
    fs.readdir("./Langs/", (err, files) => {
        if (err) console.error(err);
        let langFiles = files.filter(f => f.startsWith("language.") && f.endsWith(".js") && !f.startsWith("!"));
        langFiles.forEach(f => {
            bot.langs.push(f.split(".")[1])
            bot.modules.push("Langs/" + f)
        })
        if (langFiles.length <= 0) return console.log(lang.no_langs.red);
        console.log(lang.langs_found.yellow, bot.langs.length, bot.langs.join(", "))
    });
};