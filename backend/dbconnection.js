const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://reshmaremesan41:<Reshma@41>@cluster0.hifm2e6.mongodb.net/?Reshma@41=true&w=majority&appName=Cluster0")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})

module.exports=db
