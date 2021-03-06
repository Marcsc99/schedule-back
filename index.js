import dotenv from "dotenv"
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoConnection from './src/mongo/mongo.js'
import appRouter from './src/routes/index.js';

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,   
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3223, ()=>{
    console.log("App listening port: " + (process.env.PORT ?? 3223));
});

app.use("/",appRouter)
