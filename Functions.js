const fs = require("fs")
const util = require("util")
const config = require("./default_config.json")
module.exports = {
  format(string, ...args) {
    if (string.includes("%s")) return util.format(string, ...args); else return string;
  },
  purify(id) {
    return id.replace(".", "").replace("@", "").replace("#", "").replace("$", "").replace("[", "").replace("]", "")
  },
  checkUserExists(id) {
    return global.db.cache.users.hasOwnProperty(id);
  },
  checkGroupExists(id) {
    return global.db.cache.groups.hasOwnProperty(id);
  },
  async checkTrusted(groupId) {
    if (!this.checkGroupExists(groupId)) this.createGroup(groupId)
    return global.db.cache.groups[groupId].trusted;
  },
  async addTrustedList(groupId) {
    if (!this.checkGroupExists(groupId)) this.createGroup(groupId)
    await global.db.ref("/groups/" + groupId + "/trusted").set(true)
    return true;
  },
  async removeTrustedList(groupId) {
    if (!this.checkGroupExists(groupId)) this.createGroup(groupId)
    await global.db.ref("/groups/" + groupId + "/trusted").set(false)
    return true;
  },
  async setPermissions(userId, permissionLevel) {
    if (!this.checkUserExists(userId)) this.createUser(userId);
    await global.db.ref("/users/" + userId + "/permissions").set(permissionLevel)
    return true;
  },
  async getPermissions(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    return global.db.cache.users[userId]["permissions"];
  },
  async getUserLanguage(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    return global.db.cache.users[userId]["language"];
  },
  async setUserLanguage(userId, newLang) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    await global.db.ref("/users/" + userId + "/language").set(newLang)
    return true;
  },
  async getUser(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    return global.db.cache.users[userId];
  },
  async getGroup(groupId) {
    if (!this.checkGroupExists(groupId)) await this.createUser(groupId);
    return global.db.cache.groups[groupId];
  },
  async createUser(userId) {
    await global.db.ref("/users/" + userId).set({ permissions: false, language: config.config.language, watchfordeletedgroup: true, watchfordeletedpriv: false, ts: Date.now() })
    return this.checkUserExists(userId);
  },
  async createGroup(groupId) {
    await global.db.ref("/groups/" + groupId).set({ trusted: false, watchfordeleted: false, ts: Date.now() })
    return this.checkGroupExists(groupId);
  },
  async checkGroupWatchDeleted(groupId) {
    if (!this.checkGroupExists(groupId)) await this.createGroup(groupId);
    return global.db.cache.groups[groupId].watchfordeleted;
  },
  async checkUserWatchDeletedGroup(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    return global.db.cache.users[userId].watchfordeletedgroup;
  },
  async checkUserWatchDeletedPriv(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    return global.db.cache.users[userId].watchfordeletedpriv;
  },
  async watchGroup(groupId) {
    if (!this.checkGroupExists(groupId)) await this.createGroup(groupId);
    await global.db.ref("/groups/" + groupId + "/watchfordeleted").set(true)
    return true;
  },
  async unWatchGroup(groupId) {
    await global.db.ref("/groups/" + groupId + "/watchfordeleted").set(false)
    return true;
  },
  async watchUserGroup(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    await global.db.ref("/users/" + userId + "/watchfordeletedgroup").set(true)
    return true;
  },
  async unWatchUserGroup(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    await global.db.ref("/users/" + userId + "/watchfordeletedgroup").set(false)
    return true;
  },
  async watchUserPriv(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    await global.db.ref("/users/" + userId + "/watchfordeletedpriv").set(true)
    return true;
  },
  async unWatchUserPriv(userId) {
    if (!this.checkUserExists(userId)) await this.createUser(userId);
    await global.db.ref("/users/" + userId + "/watchfordeletedpriv").set(false)
    return true;
  }
}