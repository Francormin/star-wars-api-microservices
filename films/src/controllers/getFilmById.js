const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const film = await axios.get(`http://database:8004/Film/${id}`);
  return res.json(film.data);
  // response(res, 200, film.data);
};
