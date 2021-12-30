const { client } = require('../index');

client.onStateChanged(async state => {
    if (state === "CONFLICT" || state === "UNLAUNCHED") bot.forceRefocus();
});

module.exports = {
	name: "onStateChanged"
}