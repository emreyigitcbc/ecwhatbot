const fs = require("fs");
const Table = require('cli-table3');
var colors = require('colors');

const utilitytable = new Table({
    head: ["File Name", 'Command', 'Aliases', "Description"]
});
const eventtable = new Table({
    head: ["File Name", 'Event', "Description"]
});
module.exports = (bot) => {
    // COMMANDS
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let cmdFiles = files.filter(f => f.split(".").pop() === "js");

        if (cmdFiles.length <= 0) return console.log("NO COMMAND FOUND!".red);

        console.log(`Loading ${cmdFiles.length} commands...`.yellow);
        cmdFiles.forEach((f, i) => {
            var props = require(`./commands/${f}`);
            utilitytable.push([f, props.name, props.aliases.join("\n"), props.description])
            bot.commands.set(props.name, props);
            props.aliases.forEach(alias => {
                bot.aliases.set(alias, props.name);
            });
        });
        console.log(utilitytable + "");
    });
	
	    // EVENTS
    fs.readdir("./events/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log("NO EVENT FOUND!".red);
        console.log(`Loading ${eventFiles.length} events...`.yellow);
        eventFiles.forEach((f, i) => {
            prop = require(`./events/${f}`);
            eventtable.push([f, prop.name, prop.description])
        });
        console.log(eventtable + "");
    });
};