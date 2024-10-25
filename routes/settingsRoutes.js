const settingsRouter = require('express').Router();
let User = require('../models/UserModel');


settingsRouter.get('/', async (req, res) => {
   res.render('settings')
   //  await User.find({}, (err, users) => {
   //      if (err) res.status(500).send();
   //      else res.render('user', {users: users});
   //  });
});



module.exports = settingsRouter;