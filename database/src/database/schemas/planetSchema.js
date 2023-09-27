const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Planet's name is a required field"],
    minLength: ["3", "Planet's name length cannot be less than 3"],
    maxLength: ["25", "Planet's name length cannot be higher than 25"]
  },
  rotation_period: {
    type: String,
    default: "unknown"
  },
  orbital_period: {
    type: String,
    default: "unknown"
  },
  diameter: {
    type: String,
    default: "unknown"
  },
  climate: {
    type: String,
    lowercase: true,
    trim: true,
    default: "unknown"
  },
  gravity: {
    type: String,
    lowercase: true,
    trim: true,
    default: "unknown"
  },
  terrain: {
    type: String,
    lowercase: true,
    trim: true,
    default: "unknown"
  },
  surface_water: {
    type: String,
    default: "unknown"
  },
  residents: {
    type: [String],
    ref: "Character"
  },
  films: {
    type: [String],
    ref: "Film"
  }
});

planetSchema.statics.getAll = async function () {
  return await this.find().populate("residents", "_id name").populate("films", "_id title");
};

planetSchema.statics.getById = async function (id) {
  return await this.findById(id).populate("residents", "_id name").populate("films", "_id title");
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

module.exports = planetSchema;
