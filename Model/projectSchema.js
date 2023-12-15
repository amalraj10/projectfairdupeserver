//import mongoose
const mongoose = require('mongoose')

//create scheme
const projectSchema = new mongoose.Schema({

    Title:{
        type:String,
        require:true
    },
    Language:{
        type:String,
        require:true
    },
    GitHub:{
        type:String,
        require:true
    },
    Website:{
        type:String,
        require:true
    },
    Overview :{
        type:String,
        require:true
    },
    projectimage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    



})




//create modal
const projects = mongoose.model("projects",projectSchema)


//export
module.exports = projects