const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const updatedPlanet = await axios.patch(`http://database:8004/Planet/${id}`, req.body);
  return res.json(updatedPlanet.data);
  // response(res, 200, updatedPlanet.data);
};
