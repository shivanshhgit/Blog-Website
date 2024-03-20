import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv"
import cors from 'cors';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const portNumber = 8000;


app.listen(portNumber,()=>{console.log("Server is running on " + portNumber);});

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
Connection();