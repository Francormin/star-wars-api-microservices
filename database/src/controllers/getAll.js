const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;

  const result = await store[model].getAllDocs();
  return response(res, 200, result);
};
