const Game = require("../models/game");

module.exports = {
    create,
    index
}

function create(req, res) {
    console.log(req.body, req.file, req.user); //Checking the user and making sure the middleware fired off successfully
}