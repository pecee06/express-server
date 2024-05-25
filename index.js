import express from "express"
import dotenv from "dotenv"
import data from "./data.js"

dotenv.config()
const app = express()

app.get("/",(req, res)=>{
    res.send("OK")
})

app.get("/api/data",(req, res)=>{
    res.json(data)
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Listening on localhost:${port}`);
})