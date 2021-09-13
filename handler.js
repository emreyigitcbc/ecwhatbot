const config = require("./config.json")
const lang = require("./language.js")[""+config.language]
const fs = require("fs");
require('colors');

module.exports = (bot) => {
    // EVENTS
    fs.readdir("./events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log(lang.no_event.red);
        console.log(lang.loading_event_count.yellow, eventFiles.length);
        eventFiles.forEach((f, i) => {
            prop = require(`./events/${f}`);
            console.log(lang.event_loaded, prop.name, f)
        });
        console.log(lang.events_loaded.green);
    });
    // COMMANDS
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js");

        if (cmdFiles.length <= 0) return console.log(lang.no_command.red);

        console.log(lang.loading_command_count.yellow, cmdFiles.length);
        cmdFiles.forEach((f, i) => {
            var props = require(`./commands/${f}`);
            console.log(lang.command_loaded, props.name, f, props.aliases.join(", "))
            bot.commands.set(props.name, props);
            bot.helps.set(props.name, props.usage)
            props.aliases.forEach(alias => {
                bot.aliases.set(alias, props.name);
                bot.helps.set(alias, props.usage)
            });
        });
        console.log(lang.commands_loaded.green);
    });
};