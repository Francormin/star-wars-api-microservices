const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  const newFilm = await axios.post("http://database:8004/Film", req.body);
  return res.json(newFilm.data);
  // response(res, 201, newFilm.data);
};
