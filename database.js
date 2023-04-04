const fs = require("fs");
const { purify } = require("./functions");
// Check files exists
try {
    if (!fs.existsSync("users.json")) {
        fs.writeFileSync("users.json", '{}', { flag: "w" })
    }
    if (!fs.existsSync("groups.json")) {
        fs.writeFileSync("groups.json", '{}', { flag: "w" })
    }
    if (!fs.existsSync("client.json")) {
        fs.writeFileSync("client.json", "{}", { flag: "w" })
    }
} catch (err) {
    console.log(err)
}
databaseUpdate = (database, data) => {
    fs.writeFileSync(database + '.json', JSON.stringify(data, null, 4), { flag: 'w' });
    return true;
}

class User {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.language = data.language
        this.watching = data.watching
        this.permissions = data.permissions
        this.settings = data.settings
        this.json = {}
        this.updateJSON()
        if (!Object.keys(this.json).some(x => x == purify(this.id))) {
            this.json[this.id] = data;
            databaseUpdate("users", this.json)
            this.updateJSON();
        }
    }
    updateJSON(){
        let rawdata = fs.readFileSync('users.json');
        this.json = JSON.parse(rawdata);
    }
    setName(value) {
        this.updateJSON()
        this.json[this.id].name = value;
        this.name = value;
        return databaseUpdate("users", this.json)
    }
    setLanguage(value) {
        this.updateJSON()
        this.json[this.id].language = value;
        this.language = value;
        return databaseUpdate("users", this.json)
    }
    setWatching(value) {
        this.updateJSON()
        this.json[this.id].watching = value;
        this.watching = value;
        return databaseUpdate("users", this.json)
    }
    setPermissions(value) {
        this.updateJSON()
        this.json[this.id].permissions = value;
        this.permissions = value;
        return databaseUpdate("users", this.json)
    }
    setSettings(value) {
        this.updateJSON()
        this.json[this.id].settings = value;
        this.settings = value;
        return databaseUpdate("users", this.json)
    }
}

class Group {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.language = data.language
        this.safe = data.safe
        this.safe_users = data.safe_users
        this.settings = data.settings
        this.json = {}
        this.updateJSON()
        if (!Object.keys(this.json).some(x => x == purify(this.id))) {
            this.json[this.id] = data;
            databaseUpdate("groups", this.json)
            this.updateJSON();
        }
    }
    updateJSON(){
        let rawdata = fs.readFileSync('groups.json');
        this.json = JSON.parse(rawdata);
    }
    setSafe(value) {
        this.updateJSON()
        this.json[this.id].safe = value;
        this.safe = value;
        return databaseUpdate("groups", this.json)
    }
    setSafeUser(user, status) {
        this.updateJSON()
        if(status && !this.safe_users.includes(user)) {
            this.json[this.id].safe_users.push(user);
            this.safe_users.push(user);
        } else if(!status && this.safe_users.includes(user)) {
            const index = this.safe_users.indexOf(user);
            if (index > -1) { 
                this.safe_users.splice(index, 1);
                this.json[this.id].safe_users.splice(index, 1)
            }
        }
        return databaseUpdate("groups", this.json)
    }
    setName(value) {
        this.updateJSON()
        this.json[this.id].name = value;
        this.name = value;
        return databaseUpdate("groups", this.json)
    }
    setLanguage(value) {
        this.updateJSON()
        this.json[this.id].language = value;
        this.language = value;
        return databaseUpdate("groups", this.json)
    }
    setSettings(value) {
        this.updateJSON()
        this.json[this.id].settings = value;
        this.settings = value;
        return databaseUpdate("groups", this.json)
    }
}

class Client {
    constructor(data) {
        if (Object.keys(data).length === 0) {
            var clnt = {
                id: "",
                prefix: "!,/",
                cooldown: 5,
                language: "en",
                settings: {}
            }
            return databaseUpdate("client", clnt)
        }
        this.id = data?.id || clnt?.id
        this.prefix = data?.prefix || clnt?.prefix
        this.cooldown = data?.cooldown || clnt?.cooldown
        this.settings = data?.settings || clnt?.settings
        this.language = data?.language || clnt?.language
        this.json = {}
        this.updateJSON()
    }
    updateJSON(){
        let rawdata = fs.readFileSync('groups.json');
        this.json = JSON.parse(rawdata);
    }
    setId(value) {
        this.updateJSON();
        this.json.id = value;
        this.id = value;
        return databaseUpdate("client", this.json)
    }
    setPrefix(value) {
        this.updateJSON();
        this.json.prefix = value;
        this.prefix = value;
        return databaseUpdate("client", this.json)
    }
    setLanguage(value) {
        this.updateJSON();
        this.json.language = value;
        this.language = value;
        return databaseUpdate("client", this.json)
    }
    setSettings(value) {
        this.updateJSON();
        this.json.settings = value;
        this.settings = value;
        return databaseUpdate("client", this.json)
    }
    setCooldown(value) {
        this.updateJSON();
        this.json.cooldown = value;
        this.cooldown = value;
        return databaseUpdate("client", this.json)
    }
}

const db = {
    users: {
        get json(){
            let rawdata = fs.readFileSync('users.json');
            let modData = JSON.parse(rawdata);
            this.json = modData;
            return modData;
        },
        get(id) {
            if (this.has(id)) {
                return new User(this.json[purify(id)]);
            } else return null
        },
        has(id) {
            if (Object.keys(this.json).some(x => x == purify(id))) return true; else false;
        },
        create(id, name = "") {
            if (this.has(id)) return false;
            usr = {
                id: purify(id),
                name: name,
                permissions: 0,
                language: "en",
                watching: false,
                settings: {}
            }
            return new User(usr);
        }
    },
    groups: {
        get json(){
            let rawdata = fs.readFileSync('groups.json');
            let modData = JSON.parse(rawdata);
            this.json = modData;
            return modData;
        },
        get(id) {
            if (this.has(id)) {
                return new Group(this.json[purify(id)]);
            } else return null
        },
        has(id) {
            if (Object.keys(this.json).some(x => x == purify(id))) return true; else false;
        },
        create(id) {
            if (this.has(id)) return false;
            grp = {
                id: purify(id),
                name: "",
                language: "en",
                safe: false,
                safe_users: [],
                settings: {}
            }
            return new Group(grp);
        }
    },
    client: new Client(require("./client.json"))
}


module.exports = {
    database: db
}