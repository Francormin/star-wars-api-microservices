const { Joi } = require("express-validation");

module.exports = {
  body: Joi.object({
    _id: Joi.string().trim().required(),
    title: Joi.string().trim().min(5).max(35).required(),
    opening_crawl: Joi.string().trim().min(100).max(600).required(),
    director: Joi.string().trim().min(5),
    producer: Joi.string().trim().min(5),
    release_date: Joi.string().trim(),
    characters: Joi.array().items(Joi.string().trim()),
    planets: Joi.array().items(Joi.string().trim())
  })
};
