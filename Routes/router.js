//setup path to resolve request


//1.import express module
const express = require('express')

//import user controller
const userController = require('../controller/userController')

//import project controller
const projectController = require('../controller/projectController')

//import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

//2.Create an object for Router class inside express module
const router = new express.Router()

//3.setup path to resolve request 
 //syntax - router.httprequest('path to resolve',()=>{how to resolve})
   //a.registration-it is used to store the data that have given by user like email,username,etc
   router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//add project
router.post('/projects/add',jwtMiddleware,projectController.addproject)

//4.export router
module.exports = router