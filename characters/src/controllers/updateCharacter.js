const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const updatedCharacter = await axios.patch(`http://database:8004/Character/${id}`, req.body);
  return res.json(updatedCharacter.data);
  // response(res, 200, updatedCharacter.data);
};
