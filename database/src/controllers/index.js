const { catchedAsync } = require("../utils");

module.exports = {
  getAll: catchedAsync(require("./getAll")),
  getById: catchedAsync(require("./getById")),
  insert: catchedAsync(require("./insert")),
  update: catchedAsync(require("./update")),
  remove: catchedAsync(require("./remove"))
};
