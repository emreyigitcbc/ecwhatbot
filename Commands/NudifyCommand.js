const { exec } = require("child_process");
const { decryptMedia } = require("@open-wa/wa-decrypt");

// CHANGE HERE
var dreampower_path = `C:\\Users\\Administrator\\AppData\\Roaming\\dreamtime\\dreampower\\dreampower.exe`;

global.nudify_queue = []
module.exports = {
    name: "nudify",
    aliases: [],
    category: "fun",
    usage: "nudify_usage",
    permissions: 1,

    async run(client, message, sender, perms, prefix, args, content, lang) {
        {
            if (message.type == "image") {
                 nudify(client, message, sender, perms, prefix, args, content, lang, false);
            } else if (message.type == "chat" && message?.quotedMsgObj != null) {
                if (message?.quotedMsgObj.type == "image") {
                     nudify(client, message, sender, perms, prefix, args, content, lang, true);
                }
            }
        }
    }
}

async function nudify(client, message, sender, perms, prefix, args, content, lang, type) {
    const fs = require("fs");
    var time = Date.now();
    const filename = `nuding_${time}.jpeg`;
    if (global.nudify_queue.some(x => x.sender.id == message.sender.id)) return  client.reply(message.from, lang.nudify_already_started, message.id);
    let queue_data = {
        id: filename,
        from: message.from,
        mid: message.id,
        cid: message.chatId,
        sender: message.sender,
        ts: time
    }
    global.nudify_queue.push(queue_data);
    client.reply(message.from, client.format(lang.nudify_started, global.nudify_queue.length), message.id)

    var data;
    if (type) {
        data =  await decryptMedia(message.quotedMsgObj, client.userAgent);
    } else {
        data =  await decryptMedia(message, client.userAgent);
    }
    console.log(client.format(lang.nudify_log_started, queue_data.sender.cleanId))
    fs.writeFileSync(`${dreampower_path.replace("dreampower.exe", filename)}`, data);
    console.log(client.format(lang.nudify_log_file_saved, queue_data.id))
    if (global.nudify_queue.length != 1) return;
    dreamPower(queue_data);
}

function dreamPower(data) {
    const { client } = require("../index");
    const fs = require("fs");
    const lang = require(`../Langs/language.${global.db.users.get(data.sender.id).language}.js`);
    exec(`"${dreampower_path}" run --input "${dreampower_path.replace("dreampower.exe", data.id)}" --output "${dreampower_path.replace("dreampower.exe", data.id.replace(".jpeg", "") + "_OUT.jpeg")}" --image-size 512 --compress 0 --cpu --checkpoints "${dreampower_path.replace("dreampower.exe", "checkpoints")}" --auto-resize-crop`, async (err, stdout, stderr) => {
        if (err || stderr) {
             client.reply(data.from, lang.nudify_error, data.mid)
            console.log(err);
            console.log(stderr);
            global.nudify_queue.shift();
            if (global.nudify_queue.length == 0) return;
            dreamPower(global.nudify_queue[0], client);
        }
        console.log(client.format(lang.nudify_log_success_file, data.id.replace(".jpeg", "") + "_OUT.jpeg"))
        try {
            var newData = fs.readFileSync(`${dreampower_path.replace("dreampower.exe", data.id.replace(".jpeg", "") + "_OUT.jpeg")}`)
            const dataUrl = `data:image/jpeg;base64,${newData.toString("base64")}`;
             client.sendImage(data.cid, dataUrl, 'file.jpeg', lang.nudify_success)
            console.log(client.format(lang.nudify_log_success, data.sender.cleanId, (Date.now() - data.ts) / 1000));
            global.nudify_queue.shift();
            if (global.nudify_queue.length == 0) return;
            dreamPower(global.nudify_queue[0], client);
        } catch (err) {
            console.log(err);
            console.log(client.format(lang.nudify_log_error, data.sender.cleanId, (Date.now() - data.ts) / 1000));
             client.reply(data.from, lang.nudify_error, data.mid)
            global.nudify_queue.shift();
            if (global.nudify_queue.length == 0) return;
            dreamPower(global.nudify_queue[0], client);
        }

    });
}