const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const deletedPlanet = await axios.delete(`http://database:8004/Planet/${id}`);
  return res.json(deletedPlanet.data);
  // response(res, 200, deletedPlanet.data);
};
