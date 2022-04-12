import fetch from "node-fetch";

const getHolidays = (req,res)=>{
    const year = req.params.year;
    const country = req.params.country;

    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`)
    .then((result)=>{
        return result.json();
    })
    .then((json)=>{
        res.status(200).send(json);
    }).catch((error)=>{
        res.status(404).send(error);
    })
}

export default {
    getHolidays,
}