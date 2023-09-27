const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;

  const result = await store[model].getAll();
  return response(res, 200, result);
};
