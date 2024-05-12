const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const data = require("./models/schema")

const app = express()
app.use(cors());
const port = 3001 || process.env.PORT

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")

app.get('/user', async (req, res)=>{
  const alluser = await data.find()
  res.json(alluser)
})

app.listen(port,() =>{
  console.log(`http://localhost:${port}/`)
})


