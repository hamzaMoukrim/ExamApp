const mongoose = require("mongoose");
const autoIncreament = require("mongoose-auto-increment");

//Init auto increament
autoIncreament.initialize(mongoose.connection);

const FilmSchema = new mongoose.Schema({
  id: Number,
  nom: {
    type: String,
    required: true,
  },
  addressIP: {
    type: String,
    required: true,
  },

  systemExp: {
    type: String,
    required: true,
  },
  etat: {
    type: Boolean,
    required: true,
    default: false,
  },

  createDate: {
    type: Date,
    default: Date.now(),
  },
});

FilmSchema.plugin(autoIncreament.plugin, { model: "Machine", startAt: 1 });

module.exports = mongoose.model("Machine", FilmSchema, "machines");
