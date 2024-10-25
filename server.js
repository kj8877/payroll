const express = require('express')
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 4000

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: true }));
app.use(bodyParser.json({ parameterLimit: 100000, limit: '50mb', extended: true }));


mongoose.connect('mongodb://127.0.0.1:27017/payroll', err => {
    if (err) console.log('Error', err);
    else console.log('Database is connected.');
});

const userRoutes = require('./routes/userRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const payslipRoutes = require('./routes/payslipRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/user', userRoutes);
// app.use('/user/:id', userRoutes);
app.use('/attendance', userRoutes);

// app.use('/attendance', userRoutes);
// app.use('/attendance/:id', userRoutes);

app.use('/settings', settingsRoutes);

app.use('/create-payslip', payslipRoutes);
app.use('/payslip-list', payslipRoutes);

app.listen(port, () => {
    console.log('app now listening for requests on port', port);
});
    