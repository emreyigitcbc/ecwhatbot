const fs = require("fs")
const util = require("util")

module.exports = {
	format(string, ...args) {
		if(string.includes("%s")) return util.format(string, ...args); else return string;
	},
	jsonWrite(file, object) {
		newObject = JSON.stringify(object);
		fs.writeFile(file, newObject, (err) => {
			if (err) throw err;
		});
		return true;
	},
	addTrustedList(chatId) {
		var safe = require("./SafeGroups.json")
		if (safe.groups.includes(chatId)) return false;
		safe.groups.push(chatId)
		if (this.jsonthis.jsonWrite("./SafeGroups.json", safe)) return true; else return false
	},
	removeTrustedList(chatId) {
		var safe = require("./SafeGroups.json")
		if (!safe.groups.includes(chatId)) return false;
		safe.groups.splice(safe.groups.indexOf(chatId), 1)
		if (this.jsonWrite("./SafeGroups.json", safe)) return true; else return false
	},
	setPermissions(userNumber, permissionLevel) {
		var users = require("./Permissions.json")
		users[userNumber] = {
			"PermissionLevel": permissionLevel
		}
		if (this.jsonWrite("./Permissions.json", users)) return true; else return false
	},
	getPermissions(userNumber) {
		var users = require("./Permissions.json")
		if (Object.keys(users).includes(userNumber)) return users[userNumber]["PermissionLevel"]; else return 0;
	}
}