const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;

  const result = await store[model].getById(id);
  return response(res, 200, result);
};
