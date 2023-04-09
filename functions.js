const util = require("util")

module.exports = {
  format(string, ...args) {
    if (string.includes("%s")) return util.format(string, ...args); else return string;
  },
  purify(id) {
    return id.replace(".", "").replace("@", "").replace("#", "").replace("$", "").replace("[", "").replace("]", "").replace("cus","").replace("gus", "").replace(/(:[0-9]*@)/g, "@").replace(",", "")
  }
}