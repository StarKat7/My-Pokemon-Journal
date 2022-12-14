const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');

/*---------- Public Routes ----------*/
// There aren't any since you can't see tasks or the games they're attached to at all if you aren't logged in

/*---------- Protected Routes ----------*/
// Hitting this route calls the create function over in controllers/tasks
router.post('/', tasksCtrl.create);
// Hitting this route calls the markDone function in controllers/tasks
router.put('/', tasksCtrl.markDone);
// Hitting this route calls the deleteTask function in controllers/tasks
router.delete('/:id', tasksCtrl.deleteTask);


module.exports = router;