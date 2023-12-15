//1.import dotenv
//loads .env file contents into .env by default
require('dotenv').config()
//2.import express
const express = require('express')
//3.import cors
const cors = require('cors')


//import router
const router = require('./Routes/router')

//import connection.js
require('./DB/connections')

//4.create server
const pfServer = express()

//5.use of cors in server
pfServer.use(cors())

//6.Returns middleware that only parses json - javascript object
pfServer.use(express.json())

//use of router by server
pfServer.use(router)

//7.Custmize the port - by default -3000

const PORT = 4000 || process.env

// 8.to run server 
 pfServer.listen(PORT, ()=>{
    console.log('<h1>Project fair server running ..........</h1>');
 })

// pfServer.get('/', (req,res)=>{
//     res.send(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER  ${PORT} `);
// })