const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const updatedFilm = await axios.patch(`http://database:8004/Film/${id}`, req.body);
  return res.json(updatedFilm.data);
  // response(res, 200, updatedFilm.data);
};
