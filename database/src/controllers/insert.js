const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const body = req.body;

  const result = await store[model].insert(body);
  return response(res, 201, result);
};
