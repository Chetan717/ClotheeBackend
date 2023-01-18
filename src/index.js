const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const port = process.env.PORT || 4000
const app = express();
const config = require("./Db/Config");

const Datamodel = require("./Db/UserModel")
const Products = require("./Db/Product")
app.use(express.json())
app.use(cors());
const dbUrl = config.dbUrl;
var options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
mongoose.connect(dbUrl, options, (err) => {
    if (err) console.log(err);
  });


  



app.post("/register",async(req,res)=>{
    
let userdata = new Datamodel(req.body)
let result = await userdata.save();

let original = result.toObject();

delete original.pass

res.send(original)

})

app.post("/addpro",async(req,res)=>{
  let proddata = await new Products(req.body)

  const oripro = proddata.save();
res.send(proddata)
})





app.post("/login",async(req,res)=>{

    let user = await Datamodel.find(req.body).select("-pass")

    if(user){
        res.send(user)
    }else{
        res.send("user not found")
    }

})


app.get("/product",async (req,res)=>{
  let datapro = await Products.find();

  res.send(datapro)
})

app.delete("/product/:id",async (req,res)=>{
let deletedata = await Products.deleteOne({_id:req.params.id});
res.send(deletedata)
})

app.get("/product/:id",async(req,res)=>{
  let iddata = await Products.findOne({_id:req.params.id})
  if(iddata){
    res.send(iddata)
  }else{
    res.send("product no found")
  }
})

app.put("/product/:id",async (req,res)=>{
  let putdata = await Products.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )

  res.send(putdata)
})


app.listen(port)