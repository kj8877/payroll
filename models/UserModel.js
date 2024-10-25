let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    department: {
        type: String
    },
    sss: {
        type: Boolean
    },
    philH: {
        type: Boolean
    },
    pagIbig: {
        type: Boolean
    },
    bankAccountNumber: {
        type: Number
    },
    schedType: {
        type: String
    }
}, { timestamps: true });

let User = module.exports = mongoose.model('User', userSchema);