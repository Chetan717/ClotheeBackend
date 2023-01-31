const mongoose  = require("mongoose")

const productSchema  = new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
  
    company:{
        type:String
    },
    price:{
        type:Number
    },
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
    color:{
        type:Object
    },
    size:{
        type:Object
    },
    status:{
        type:Number
    },
    gender:{
        type:Number
    },
    review:{
        type:Number
    },
    des:{
        type:String
    },
    other:{
        type:String
    },
})
const Products = mongoose.model("product",productSchema);

module.exports = Products;