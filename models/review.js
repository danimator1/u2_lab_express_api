const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema(
    {
        score: { type: Number, min: 1, max: 10, required: true },
        comment: { type: String, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Review', ReviewSchema);