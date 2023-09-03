const whatsapp = require("@open-wa/wa-automate");

// NO MORE FIREBASE
// Set up JSON databases
const db = require("./database.js");

/*
Permissions:
-1 - banned user
0 - normal user
1 - moderator user
10 - admin (full access)
11 - owner
*/

function start() {
  whatsapp.create({
    sessionId: "ECWHATSUPP",
    multiDevice: true, //required to enable multiDevice support
    authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    ezqr: true,
    logConsole: false,
    useChrome: true,
    popup: false,
    qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
  }).then(async (bot) => {
    global.db = db.database
    bot.userAgent = "WhatsApp/2.16.352 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36";
    require("./handler.js")(bot);
    module.exports = {
      client: bot
    };
  }).catch((err) => {
    console.log(err);
    start()
  });
}
try {
  start()
} catch(err) {
  console.log(err)
  start()
}
