const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Character's name is a required field"],
    minLength: ["3", "Character's name length cannot be less than 3"],
    maxLength: ["25", "Character's name length cannot be higher than 25"]
  },
  height: {
    type: String,
    default: "unknown"
  },
  mass: {
    type: String,
    default: "unknown"
  },
  hair_color: {
    type: String,
    lowercase: true,
    trim: true,
    default: "n/a"
  },
  skin_color: {
    type: String,
    lowercase: true,
    trim: true,
    default: "unknown"
  },
  eye_color: {
    type: String,
    lowercase: true,
    trim: true,
    default: "unknown"
  },
  birth_year: {
    type: String,
    trim: true,
    default: "unknown"
  },
  gender: {
    type: String,
    lowercase: true,
    trim: true,
    enum: {
      values: ["male", "female", "hermaphrodite", "none", "n/a"],
      message: "Character's gender must be one of the followings: 'male', 'female', 'hermaphrodite', 'none' or 'n/a'"
    },
    default: "n/a"
  },
  homeworld: {
    type: String,
    trim: true,
    ref: "Planet"
  },
  films: {
    type: [String],
    ref: "Film"
  }
});

characterSchema.statics.getAllDocs = async function () {
  return await this.find().populate("homeworld", "_id name").populate("films", "_id title");
};

characterSchema.statics.getDocById = async function (id) {
  return await this.findById(id).populate("homeworld", "_id name").populate("films", "_id title");
};

characterSchema.statics.insertNewDoc = async function (character) {
  return await this.create(character);
};

characterSchema.statics.updateDocById = async function (id, character) {
  return await this.findByIdAndUpdate(id, character);
};

characterSchema.statics.deleteDocById = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = characterSchema;
