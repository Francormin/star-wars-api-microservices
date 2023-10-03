const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const deletedCharacter = await axios.delete(`http://database:8004/Character/${id}`);
  return res.json(deletedCharacter.data);
  // response(res, 200, deletedCharacter.data);
};
