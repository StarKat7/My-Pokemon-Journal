const Task = require("../models/task");
const Game = require("../models/game");

module.exports = {
    create,
    markDone
}

async function markDone(req, res) {
    try {
        console.log("Reached the markDone controller for tasks", req.body, req.user);
        // So if I use findOneAndUpdate I think I need to submit the entire task with everything but the boolean changed
        Task.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
        // Why does the task come out looking all funky after it's updated?
        const task = Task.findById(req.body._id);
        const gameWithTask = await Game.findById(req.body.game);
        // Okay so now I snip the gameID out of the todo list and put it into the done list
        console.log("In the tasks markDone controller, looking at updated task and gameWithTask", task, gameWithTask)
        // Okay so I KNOW the button click is making it to this controller, the specific game IS being modified. It's just the task itself is not being updated correctly.
        gameWithTask.tasksToDo.remove(req.body._id);
        await gameWithTask.save();
        gameWithTask.tasksDone.push(req.body._id);
        await gameWithTask.save();
    } catch (err) {
        res.status(400).json({ error: err });
    }
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
        // Why THE HELL did I have curly brackets in the .push()? Earlier me what were you thinking?
        // Also now I'm wondering if I even need to have arrays of task ID's? Musings for future me cause my brain is fried
        gameGettingTask.tasksToDo.push(task);
        // Save the task to the game document
        await gameGettingTask.save();
        // Now respond to the client with the data and a status 201
        res.status(201).json({ data: task })
    } catch (err) {
        res.status(400).json({ error: err });
    }
}