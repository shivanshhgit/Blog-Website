import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv"

import Router from './routes/route.js';

dotenv.config();


const app = express();

app.use('/',Router);

const portNumber = 8000;


app.listen(portNumber,()=>{console.log("Server is running on " + portNumber);});

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
Connection();