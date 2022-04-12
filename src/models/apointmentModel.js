const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApointmentSchema = new Schema({
  date: Date,
  iniHour: {
    hour: Number,
    minute: Number
  },
  finishHour: {
    hour: Number,
    minute: Number
},
  title: String,
  description: String
});

const Apointment = mongoose.model("apointment", ApointmentSchema);

export default Apointment;