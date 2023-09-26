const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const newPlanet = await axios.post("http://database:8004/Planet", req.body);
  return res.json(newPlanet.data);
  // response(res, 201, newPlanet.data);
};
