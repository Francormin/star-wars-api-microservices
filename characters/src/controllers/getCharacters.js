const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await axios.get("http://database:8004/Character");
  return res.json(characters.data);
  // response(res, 200, characters.data);
};
