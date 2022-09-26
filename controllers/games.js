const Game = require("../models/game");
const User = require("../models/user");

module.exports = {
    create,
    userGames
}

async function userGames(req, res) {
    try {
      // So to get the logged-in user I use req.user._id?
      const user = await User.findOne({ user: req.user._id });
      if (!user) return res.status(404).json({ error: "Something's gone wrong in userGames, check it in controllers/users.js" })
      // Now I find the user's games...
      // I put user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'} in the Game model so that should apply here
      const games = await Game.find({ user: user._id }).populate("user").exec();
      res.status(200).json({
        data: {
          user: user,
          games: games
        }
      });
    } catch (err) {
      console.log(err.message, " <- this error is occurring in the userGames function in the users controller");
      res.status(400).json({ error: "Something went wrong..." });
    }
  }

async function create(req, res) {
    console.log(req.body, req.file, req.user); //Checking the user and making sure the middleware fired off successfully
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