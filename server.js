const express = require('express')
const app=express()
const port = 5000
app.use(express.json())
app.get("/" , (req, res) => {
  res.send("Bienvenue sur le backend Nodejs !!")  
})
app.listen(port, ()=> {
    console.log("server is running !! ....")
})