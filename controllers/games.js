const Game = require("../models/game");
const Task = require("../models/task");
const User = require("../models/user");

module.exports = {
  create,
  userGames,
  deleteGame
}

async function deleteGame(req, res) {
  try {
    // So I have to delete all the tasks that have the game's ID in them...
    await Task.deleteMany({ game: req.params.id });
    // And then delete the game itself
    await Game.findOneAndDelete({ _id: req.params.id });
    res.json({ data: "Game and tasks were removed" })
  } catch (err) {
    console.log("Something went wrong in the deleteGame controller")
    res.status(400).json({ error: err })
  }
}

async function userGames(req, res) {
  try {
    // So to get the logged-in user I use req.user._id?
    // Now I find the user's games...
    // I put user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'} in the Game model so that should apply here
    const games = await Game.find({ user: req.user._id }).populate("tasksToDo").populate("tasksDone").exec();
    res.status(200).json({
      data: games
    });
  } catch (err) {
    console.log(err.message, " <- this error is occurring in the userGames function in the users controller");
    res.status(400).json({ error: "Something went wrong..." });
  }
}

async function create(req, res) {
  console.log(req.body, req.user); //Checking the user and making sure the middleware fired off successfully
  try {
    // So I'm using the Game model to create a document in mongodb's games collection
    const game = await Game.create({
      user: req.user,
      gameTitle: req.body.title,
      gen: req.body.gen,
      coverUrl: req.body.coverUrl,
      platform: req.body.platform
    });
    // Now respond to the client with the data and a status 201
    res.status(201).json({ data: game })
  } catch (err) {

  }
}