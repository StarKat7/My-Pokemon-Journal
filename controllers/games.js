const Game = require("../models/game");

module.exports = {
    create,
    // index
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