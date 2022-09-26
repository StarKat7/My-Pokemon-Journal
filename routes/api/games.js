const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');


/*---------- Public Routes ----------*/
// There aren't any since you can't see games at all if you aren't logged in

/*---------- Protected Routes ----------*/
// Hitting this route calls the create function over in controllers/games
router.post('/', gamesCtrl.create); 
// And hitting this one calls the userGames function
router.get('/', gamesCtrl.userGames);

module.exports = router;