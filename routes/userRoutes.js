const userRouter = require('express').Router();
let User = require('../models/UserModel');


userRouter.post('/', async (req, res) => { 
    let query = {
        $and: [{firstName: req.body.firstName}, {lastName: req.body.lastName}]
    }
    await User.findOne(query, (err, users) => {
        if (err) res.status(500).send();
        else if (users) res.status(409).send('User already exist.')
        else {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                hireDate: req.body.hireDate,
                department: req.body.department
            })
            user.save((err, saved) => { 
                if (err) res.status(409).send();
                else res.redirect('/user')
            });
        }
    });

});

userRouter.get('/', async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) res.status(500).send();
        else res.render('user', {users: users});
    });
});

userRouter.get('/:id', (req, res) => {
    console.log('rparms', req.params)
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) res.status(500).send();
        else res.render('user-view', {user: user});
    });
});

userRouter.put('/:id/attendance', async (req, res) => {
    console.log('-0-a0d-a0sd-0as', req.body)
    // console.log('rparms', req.query)
    // await User.findOne({ _id: req.params.id }, (err, user) => {
    //     if (err) res.status(500).send();
    //     else res.render('user-view', {user: user});
    // });
});

userRouter.post('/update', (req, res) => { 
    User.findOne({ _id: req.body.id }, function (err, user) {
        if (err) res.status(500).send(); 
        else if (user) {
            if (req.body.name) { 
                user.name = req.body.name;
            } 
            if (req.body.description) { 
                user.description = req.body.description;
            }
            user.save((err, saved) => { 
                if (err) res.status(500).send();
                else res.redirect('/user'); 
            });
        } else res.status(404).send();
    })
    
})

userRouter.post('/delete', (req, res) => { 
    User.findByIdAndRemove({ 
        _id: req.body.id 
    }, (err) => {
        if (err) res.status(500).send('Error deleting user.');
        else res.redirect('/user');
    });
})

module.exports = userRouter;