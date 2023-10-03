const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;

  const result = await store[model].deleteDocById(id);
  return result !== null
    ? response(res, 200, `The ${model} has been successfully deleted`)
    : response(res, 200, result);
};
