const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer = require('multer');
const upload = multer();

/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
// This is the route that calls the function that grabs all the user's games
router.get('/', usersCtrl.userGames);



module.exports = router;