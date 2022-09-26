const mongoose = require('mongoose');


// Should I have an embedded schema for the tasks, or should they be their own unique model? User-generated tasks will be unique to each game, given how specific they can be...
const gameSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    gameTitle: String,
    gen: Number,
    coverUrl: String,
    platform: String,
    tasksDone: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    tasksToDo: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
})

module.exports = mongoose.model('Game', gameSchema);