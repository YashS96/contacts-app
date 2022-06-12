import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import Route from './routes/routes.js'

const app = express();

// basic requirements for web server setup
app.use('/',cors());
app.use('/',bodyParser.urlencoded({extended:true}));
app.use('/',bodyParser.json({extended:true}));
app.use('/',Route);

// environment file configs
dotenv.config();

const port = 8000;

app.listen(port, ()=>{console.log(`server is up and running! at ${port}`)})
