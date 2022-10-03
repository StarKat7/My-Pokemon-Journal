const Task = require("../models/task");
const Game = require("../models/game");

module.exports = {
    create,
    markDone,
    deleteTask
}

async function deleteTask(req, res) {
    try {
        // This one will be easier than deleting a game, since I only have to delete one thing
        // Wait no I have to delete the task from the game's lists too!
        const gameWithTask = await Game.findById(req.body.game);
        // Removing from whichever list it's in
        await gameWithTask.tasksToDo.remove(req.params.id);
        await gameWithTask.tasksDone.remove(req.params.id);
        await gameWithTask.save();
        // Remove task from the list
        await Task.findOneAndDelete({ _id: req.body._id });
        // So findOneAndDelete was working before but now it's not...
        res.json({ data: "Task was removed" })
    } catch (err) {
        console.log("Something went wrong in the deleteTask controller");
        res.status(400).json({ error: err });
    }
}

async function markDone(req, res) {
    try {
        // So if I use findOneAndUpdate I think I need to submit the entire task with everything but the boolean changed
        const task = await Task.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
        // Why does the task come out looking all funky after it's updated?
        const gameWithTask = await Game.findById(req.body.game);
        // Okay so now I snip the gameID out of the todo list and put it into the done list
        gameWithTask.tasksToDo.remove(req.body._id);
        await gameWithTask.save();
        gameWithTask.tasksDone.push(req.body._id);
        await gameWithTask.save();
        res.status(201).json({ data: task });
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

async function create(req, res) {
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
        res.status(201).json({ data: task });
    } catch (err) {
        res.status(400).json({ error: err });
    }
}