import Apointment from '../models/apointmentModel.js';

const getApointments = async (req,res) => {
    res.status(200).json(await Apointment.find());
}

const createApointment = async (req, res) => {
    const body = req.body;
    
    /*const data = {
        date: body.date,
        iniHour: {
            hour: body.iniHour.hour,
            minute: body.iniHour.minute
        },
        finishHour: {
            hour: body.finishHour.hour,
            minute: body.finishHour.minute
        },
        title: body.title,
        description: body.description
    }*/
    var newApointment = new Apointment(body);
   
    newApointment.save(
        function (err) {
            if (err) {
                console.log("Falta un dato")
                res.status(400).json({err});
            }
        }
    );
    
    
    res.status(201).json({Message: "Your new Apointment was created Succesfully", newApointment});
  }

export default {
    getApointments,
    createApointment,
}