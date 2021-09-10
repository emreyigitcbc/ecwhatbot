const fs = require("fs");
require('colors');

module.exports = (bot) => {
    // EVENTS
    fs.readdir("./events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log("NO EVENT FOUND!".red);
        console.log(`Loading ${eventFiles.length} events...`.yellow);
        eventFiles.forEach((f, i) => {
            prop = require(`./events/${f}`);
            console.log(`Event "${prop.name.green}" (${f.red}) loaded succesfully.`)
        });
        console.log("Events loaded succesfully!".green);
    });
    // COMMANDS
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js");

        if (cmdFiles.length <= 0) return console.log("NO COMMAND FOUND!".red);

        console.log(`Loading ${cmdFiles.length} commands...`.yellow);
        cmdFiles.forEach((f, i) => {
            var props = require(`./commands/${f}`);
            console.log(`Command "${props.name.green}" (${f.red}) loaded succesfully. [${props.aliases.join(", ").yellow}]`)
            bot.commands.set(props.name, props);
            props.aliases.forEach(alias => {
                bot.aliases.set(alias, props.name);
            });
        });
        console.log("Commands loaded succesfully!".green);
    });
};