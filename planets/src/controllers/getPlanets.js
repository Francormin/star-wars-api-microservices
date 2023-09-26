const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await axios.get("http://database:8004/Planet");
  return res.json(planets.data);
  // response(res, 200, planets.data);
};
