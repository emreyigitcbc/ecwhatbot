const decache = require('decache');
module.exports = {
    name: "modules",
    aliases: ["module"],
    category: "dontshow",
    usage: "module_usage",
    permissions: 999,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        {
            if (args.length > 0) {
                if (args[0] == "reload") {
                    client.modules.forEach(module => {
                        try {
                            if (!module.includes("ModuleCommand")) decache(module)
                        } catch { }
                    })
                    require("../handler")(client);
                } else if (args[0] == "load") {
                    try {
                        return require(args[1]);
                    } catch {

                    }
                } else if (args[0] == "unload") {
                    try {
                        if (!args[0].includes("ModuleCommand")) decache(args[0])
                        return;
                    } catch { }
                }
            }
        }
    }
}
