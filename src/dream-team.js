const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members != "object" || members == null) return false;
  let name = "";
  members.sort().map(function (item) {
    if (typeof item == "string") name += item[0];
  });
  return name.toUpperCase();
};
