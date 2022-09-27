const Task = require("../models/task");
const Game = require("../models/game");

module.exports = {
    create
}

async function create(req, res) {
    console.log(req.body, req.user); //Checking the user and making sure the middleware fired off successfully
    try {
        // So I find the game by its ID(cause people could have more than one of a game, so searching by name wouldn't work)
        const game = await Game.findById(req.params.id);
        // So I'm using the Task model to create a document in mongodb's tasks collection
        const task = await Task.create({
            user: req.user,
            game: req.game._id,
            gameTitle: req.body.game,
            taskTitle: req.body.title,
            taskDescription: req.body.description,
            isDone: req.body.done
        });
        // I need to make the task before I can save its ID to the game's to-do list
        game.tasksToDo.push({task: req.task._id});
        // Save the task to the game document
        await game.save();
        // Now respond to the client with the data and a status 201
        res.status(201).json({ data: task })
    } catch (err) {
        res.status(400).json({error: err})
    }
}