const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        deceased: { type: Boolean, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Actor', ActorSchema);