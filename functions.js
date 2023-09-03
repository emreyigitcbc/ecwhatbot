const util = require("util")

module.exports = {
  format(string, ...args) {
    if (typeof string === string || args?.length == 0 ) return;
    if (string.includes("%s")) return util.format(string, ...args); else return string;
  },
  purify(id) {
    return id.toString().replace(".", "").replace("@", "").replace("#", "").replace("$", "").replace("[", "").replace("]", "").replace("cus","").replace("gus", "").replace(/(:[0-9]*@)/g, "@").replace(",", "")
  }
}