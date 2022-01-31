global.db.ref("/").on("value", async function (snap) {
  if(!snap.exists()) await global.db.ref("/").set(require("../default_config.json"));
  global.db.cache = Object.assign(require("../default_config.json"), snap.val())
  console.log("Database cache changed.")
})

module.exports = {
	name: "onFirebaseRTDBUpdate"
}