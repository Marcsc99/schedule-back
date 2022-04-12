import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();

const databaseURL = process.env.DATABASE_URL;
mongoose.connect(databaseURL);

const mongo = mongoose.connection;
mongo.on('error', (error) => console.error(error));
mongo.once('open', () => {
    console.log('connected to Schedule database');
});

export default mongo;