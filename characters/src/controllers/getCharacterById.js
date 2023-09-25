const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const character = await axios.get(`http://database:8004/Character/${id}`);
  return res.json(character.data);
  // response(res, 200, character.data);
};
