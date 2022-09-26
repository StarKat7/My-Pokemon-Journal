const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    game: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    taskTitle: String,
    taskDescription: String,
    isDone: Boolean
})

module.exports = mongoose.model('Task', taskSchema);