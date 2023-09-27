const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    trim: true,
    required: [true, "Film's title is a required field"],
    minLength: ["5", "Film's title length cannot be less than 5"],
    maxLength: ["35", "Film's title length cannot be higher than 35"]
  },
  opening_crawl: {
    type: String,
    trim: true,
    required: [true, "Film's opening crawl is a required field"],
    minLength: ["100", "Film's opening crawl length cannot be less than 100"],
    maxLength: ["600", "Film's opening crawl length cannot be higher than 600"]
  },
  director: {
    type: String,
    trim: true,
    minLength: ["5", "Film's director length cannot be less than 5"],
    default: "unknown"
  },
  producer: {
    type: String,
    trim: true,
    minLength: ["5", "Film's producer length cannot be less than 5"],
    default: "unknown"
  },
  release_date: {
    type: String,
    trim: true,
    default: "unknown"
  },
  characters: {
    type: [String],
    ref: "Character"
  },
  planets: {
    type: [String],
    ref: "Planet"
  }
});

filmSchema.statics.getAll = async function () {
  return await this.find().populate("characters", "_id name").populate("planets", "_id name");
};

filmSchema.statics.getById = async function (id) {
  return await this.findById(id).populate("characters", "_id name").populate("planets", "_id name");
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;
