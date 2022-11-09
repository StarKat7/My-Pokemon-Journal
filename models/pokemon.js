const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    game: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    acquired: Boolean,
    image: String,
    location: String,
    huntMethods: String,
    counter: Number,
    notes: String
})

module.exports = mongoose.model('Pokemon', pokemonSchema);