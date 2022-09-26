const mongoose = require('mongoose');

// Decided to make the tasks into a separate model because I want to make them displayable by themselves, independent of the games, if the user wants
const taskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    game: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    taskTitle: String,
    taskDescription: String,
    isDone: Boolean
})

module.exports = mongoose.model('Task', taskSchema);