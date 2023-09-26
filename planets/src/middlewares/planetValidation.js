const { Joi } = require("express-validation");

module.exports = {
  body: Joi.object({
    _id: Joi.string().trim().required(),
    name: Joi.string().trim().min(3).max(25).required(),
    rotation_period: Joi.number().min(0).max(100),
    orbital_period: Joi.number().min(0).max(5500),
    diameter: Joi.number().min(0).max(20000),
    climate: Joi.string().lowercase().trim(),
    gravity: Joi.string().lowercase().trim(),
    terrain: Joi.string().lowercase().trim(),
    surface_water: Joi.number().min(0).max(100),
    residents: Joi.array().items(Joi.string().trim()),
    films: Joi.array().items(Joi.string().trim())
  })
};
