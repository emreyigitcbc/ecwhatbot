const lang = require(`./Langs/language.${global.db.cache.config.language}.js`)
const fs = require("fs");
require('colors');

module.exports = (bot) => {
    bot.modules = ["../handler.js"]
    bot.langs = []
    bot.commands = new Map();
    bot.commands_list = { fun: [], general: [], moderation: [], dontshow: [] }
    bot.xox = new Map();
    bot.send = new Map();
    bot.cooldown = new Map();
    bot.votes = new Map();
    bot.userAgent = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";

    // EVENTS
    fs.readdir("./Events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log(lang.no_event.red);
        console.log(lang.loading_event_count.yellow, eventFiles.length);
        eventFiles.forEach((f, i) => {
            bot.modules.push("../Events/" + f)
            prop = require(`./Events/${f}`);
            console.log(lang.event_loaded.yellow, prop.name, f)
        });
        console.log(lang.events_loaded.green);
    });
    // COMMANDS
    fs.readdir("./Commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js");
        if (cmdFiles.length <= 0) return console.log(lang.no_command.red);
        console.log(lang.loading_command_count.yellow, cmdFiles.length);
        cmdFiles.forEach((f, i) => {
            var props = require(`./Commands/${f}`);
            bot.modules.push("./" + f)
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
        let langFiles = files.filter(f => f.startsWith("language.") && f.endsWith(".js"));
        langFiles.forEach(f => { bot.langs.push(f.split(".")[1]) })
        if (langFiles.length <= 0) return console.log(lang.no_langs.red);
        console.log(lang.langs_found, bot.langs.length, bot.langs.join(", "))
    });
};