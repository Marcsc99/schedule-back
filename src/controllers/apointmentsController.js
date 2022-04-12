

const getApointments = (req,res) => {
    
    res.status(200).send({Message: "Te he dado los apointments"});
    
}

export default {
    getApointments,
}