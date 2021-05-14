const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    genre : String,
    plot: String,
    cast : [{type: Schema.Types.ObjectId, ref:'Celebrity'}]
  },
  {
    timestamps: true
  }
);

const movieModel = mongoose.model('movies', movieSchema);
module.exports = movieModel;
