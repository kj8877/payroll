const homeRouter = require('express').Router();
let Task = require('../models/UserModel');

homeRouter.get('/', async (req, res) => {
    const tasks = await Task.find({})
    if (tasks.length > 0) {
        console.log('asdsd')
        res.render('index', {tasks: tasks});
    } else {
        res.render('index', {tasks: tasks});
        // res.status(404).send()
    }
});

module.exports = homeRouter;