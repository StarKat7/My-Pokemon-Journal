const Task = require("../models/task");
const Game = require("../models/game");

module.exports = {
    create
}

async function create(req, res) {
    console.log("From the create function in task controller", req.body, req.user); //Checking the user and making sure the middleware fired off successfully
    try {
        // So I find the game by its ID(cause people could have more than one of a game, so searching by name wouldn't work)
        const gameGettingTask = await Game.findById(req.body.gameId.trim());
        // So I'm using the Task model to create a document in mongodb's tasks collection
        const task = await Task.create({
            user: req.user,
            game: gameGettingTask._id,
            gameTitle: gameGettingTask.gameTitle,
            taskTitle: req.body.title,
            taskDescription: req.body.description,
            isDone: req.body.done
        });
        // I need to make the task before I can save its ID to the game's to-do list
        gameGettingTask.tasksToDo.push(task);
        // Save the task to the game document
        await gameGettingTask.save();
        // Now respond to the client with the data and a status 201
        res.status(201).json({ data: task })
    } catch (err) {
        res.status(400).json({error: err})
    }
}