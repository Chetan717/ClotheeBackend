const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const port = process.env.PORT || 4000
const app = express();
const config = require("./src/Db/Config");

const Datamodel = require("./src/Db/UserModel")
const Image = require("./src/Db/imagechema")
const Videos = require("./src/Db/Videomodel")

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




  app.get("/",(req,res)=>{
    res.send("hello Photo grapher!")
  })


app.post("/register",async(req,res)=>{
    
let userdata = new Datamodel(req.body)
let result = await userdata.save();

let original = result.toObject();

delete original.pass

res.send(original)

})

app.post("/addimage",async(req,res)=>{
  let proddata = await new Image(req.body)

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


app.get("/image",async (req,res)=>{
  let datapro = await Image.find();

  res.send(datapro)
})

app.delete("/image/:id",async (req,res)=>{
let deletedata = await Image.deleteOne({_id:req.params.id});
res.send(deletedata)
})

app.get("/image/:id",async(req,res)=>{
  let iddata = await Image.findOne({_id:req.params.id})
  if(iddata){
    res.send(iddata)
  }else{
    res.send("image no found")
  }
})

app.put("/image/:id",async (req,res)=>{
  let putdata = await Image.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )

  res.send(putdata)
})


// video schemas 


app.post("/addvid",async(req,res)=>{
  let proddata = await new Videos(req.body)

  const oripro = proddata.save();
res.send(proddata)
})


app.get("/video",async (req,res)=>{
  let datapro = await Videos.find();

  res.send(datapro)
})

app.delete("/video/:id",async (req,res)=>{
let deletedata = await Videos.deleteOne({_id:req.params.id});
res.send(deletedata)
})

app.get("/video/:id",async(req,res)=>{
  let iddata = await Videos.findOne({_id:req.params.id})
  if(iddata){
    res.send(iddata)
  }else{
    res.send("product no found")
  }
})

app.put("/video/:id",async (req,res)=>{
  let putdata = await Videos.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )

  res.send(putdata)
})





app.listen(port)