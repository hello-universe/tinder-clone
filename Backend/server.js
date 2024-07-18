//Connection string: mongodb+srv://amitvermaav1722:Db_p@s$123@cluster0.ukmggme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import dotenv from 'dotenv'

import Cards from './dbCards.model.js'

// Load environment variables from .env file
dotenv.config();

//App Config
const app = express()
const port = process.env.PORT

const connection_url = process.env.CONNECTION_URL

//Middlewares

app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url)
const db = mongoose.connection
db.on("error", ()=>{
    console.log("Error while connecting with mongoDB")
})
db.once("open", ()=>{
    console.log("Connected with mongoDB")
})


//API Endpoints

//GET request for home
app.get("/", (req, res)=>{
    res.status(200).send("Hello from server!");
})

//POST request to add users to Database
app.post("/tinder/card", async (req, res)=>{
    const dbCard = req.body;
    try{
        const data = await Cards.create(dbCard)
        res.status(201).send(data)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//GET request to get users from database
app.get("/tinder/card", async (req, res)=>{
    try{
        const data = await Cards.find()
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//Listener

app.listen(port, () => console.log(`Listening on localhost port: ${port}`))