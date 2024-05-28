const mongoose = require('mongoose');
const { Schema } = mongoose;

const Movie = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: String, required: true },
    rating: { type: Number, required: true },
    year_released: { type: Number, required: true },
    description: { type: String, required: true },
    actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', Movie);
