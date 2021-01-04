require ('dotenv').config()
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
const app = express();

// Routes
import user from '../routes/user'
const uri = process.env.ATLAS_JOBAPPLICATION

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.once('open', ()=>{
    console.log('Connected to DB')
})

// App config
app.use(bodyParser.json());
app.use(cors());
app.use(
    session({
        secret: process.env.EXPRESS_SESSION,
        resave: true,
        saveUninitialized: true
    })
)
app.use(cookieParser(process.env.EXPRESS_SESSION))


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    next()
})


// Using routes
app.use('/api', user)

app.get('*', (req, res)=>{
    res.status(404).send('you visited the wrong page')
})
const port = 3001

app.listen(port, () => console.log(`${port} has started`))