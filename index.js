const whatsapp = require("@open-wa/wa-automate");
var admin = require("firebase-admin");
/* Do not forget to change here */
const serviceAccount = {
  "type": "service_account",
  "project_id": "aaaaaaa",
  "private_key_id": "aaaaaaa",
  "private_key": "aaaaaaaa",
  "client_email": "aaaaa",
  "client_id": "aaaaaaaa",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "aaaaaaaa"
}
// If you are using a modded whatsapp, you must set "multiDevice" to "true" for getting deleted messages.
// Otherwise, it is best to keep it "false".
function start() {
  whatsapp.create({
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    logConsole: false,
    popup: true,
    qrTimeout: 0,
    multiDevice: false
  }).then(async (bot) => {
    admin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://whatsbot-bd1dc-default-rtdb.firebaseio.com",
    });
    global.db = admin.database();
    global.db.cache = require("./default_config.json")
    /* Declaring Global Bot Functions */
    bot = Object.assign(bot, require("./Functions"));
    require("./handler.js")(bot);
    module.exports = {
      client: bot
    };
  }).catch((err) => {
    console.log(err)
    start()
  });
}
start()
