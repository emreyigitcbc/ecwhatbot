const { client } = require('../index');

client.onStateChanged(async state => {
    if (state === "CONFLICT" || state === "UNLAUNCHED") client.forceRefocus();
});

module.exports = {
	name: "onStateChanged"
}