const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  const deletedFilm = await axios.delete(`http://database:8004/Film/${id}`);
  return res.json(deletedFilm.data);
  // response(res, 200, deletedFilm.data);
};
