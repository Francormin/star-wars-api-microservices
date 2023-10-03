const { Joi } = require("express-validation");

module.exports = {
  creation: {
    body: Joi.object({
      _id: Joi.string().trim().required(),
      name: Joi.string().trim().min(3).max(25).required(),
      height: Joi.number().min(10).max(350),
      mass: Joi.number().min(10).max(1500),
      hair_color: Joi.string().lowercase().trim(),
      skin_color: Joi.string().lowercase().trim(),
      eye_color: Joi.string().lowercase().trim(),
      birth_year: Joi.string().trim(),
      gender: Joi.string().lowercase().trim().valid("male", "female", "hermaphrodite", "none", "n/a"),
      homeworld: Joi.string().trim(),
      films: Joi.array().items(Joi.string().trim())
    })
  },
  edition: {
    body: Joi.object({
      name: Joi.string().trim().min(3).max(25),
      height: Joi.number().min(10).max(350),
      mass: Joi.number().min(10).max(1500),
      hair_color: Joi.string().lowercase().trim(),
      skin_color: Joi.string().lowercase().trim(),
      eye_color: Joi.string().lowercase().trim(),
      birth_year: Joi.string().trim(),
      gender: Joi.string().lowercase().trim().valid("male", "female", "hermaphrodite", "none", "n/a"),
      homeworld: Joi.string().trim(),
      films: Joi.array().items(Joi.string().trim())
    })
  }
};
