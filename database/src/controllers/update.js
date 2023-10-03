const store = require("../database");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const body = req.body;

  if (!Object.keys(body).length)
    throw new ClientError("There is nothing to update. You have to change at least one field first!");

  const result = await store[model].updateDocById(id, body);
  return result !== null
    ? response(res, 200, `The ${model} has been successfully updated`)
    : response(res, 200, result);
};
