import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ApointmentSchema = new Schema({
  date: {type: Date, required:true},
  iniHour: {
    hour: {type: Number, required:true},
    minute: {type: Number, required:true}
  },
  finishHour: {
    hour: {type: Number, required:true},
    minute: {type: Number, required:true}
},
  title: {type: String, required:true},
  description: {type: String, required:false},
  color: {type: String, required:false},
  textColor: {type: String, required:false},
});

const Apointment = mongoose.model("apointment", ApointmentSchema);

export default Apointment;