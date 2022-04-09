import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
import routes from './routes/index.js';

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.use(bodyParser.json());

const server = app.listen(3223, ()=>{
    console.log("App listening port 3223");
});


app.use("/",routes)
