const mongoose  = require("mongoose")

const Imagechema  = new mongoose.Schema({
   image:{
        type:String
    },
    image2:{
        type:String
    },
    image3:{
        type:String
    },
    image4:{
        type:String
    },
    image5:{
        type:String
    },
    image6:{
        type:String
    },
    image7:{
        type:String
    },
    image8:{
        type:String
    },
    image9:{
        type:String
    },
    image10:{
        type:String
    },
    image11:{
        type:String
    },
    image12:{
        type:String
    },
    image13:{
        type:String
    },
    image14:{
        type:String
    },
    image15:{
        type:String
    },
    image16:{
        type:String
    },
    image17:{
        type:String
    },
    image18:{
        type:String
    },
    image19:{
        type:String
    },
    image20:{
        type:String
    },




})
const Image = mongoose.model("photodata",Imagechema);

module.exports = Image;


 