const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const newCharacter = await axios.post("http://database:8004/Character", req.body);
  return res.json(newCharacter.data);
  // response(res, 201, newCharacter.data);
};
