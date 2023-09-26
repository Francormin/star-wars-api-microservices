const planets = require("./planets.json");

module.exports = {
  list: async () => {
    return planets;
  },

  create: async () => {
    throw Error("There was an error creating the planet");
  }
};
