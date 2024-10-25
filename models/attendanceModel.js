let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let attendanceSchema = Schema({
   _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   date: {
      type: Date
   },
   timeIn: {
      type: Date
   },
   timeOut: {
      type: Date
   },
   leave: {
      type: Boolean,
      defaul: false
   }
}, { timestamps: true });

let Attendance = module.exports = mongoose.model('Attendance', attendanceSchema);