const payslipRouter = require('express').Router();
let User = require('../models/UserModel');

payslipRouter.get('/', async (req, res) => {
   // await User.find({}, (err, users) => {
   //    if (err) res.status(500).send();
   //    else res.render('user', {users: users});
   // });
   res.render('create-payslip');
});
module.exports = payslipRouter;