const mongoose=require("mongoose");
//  const{ MONGO_URI }=process.env;

exports.connect=()=>{
    // console.log("shgf..",MONGO_URI)
    mongoose.connect('mongodb://localhost:27017/TaskSystem',{
        useNewUrlParser:true,
    }).then(()=>{
        console.log("database connection successfully")
    }).catch((error)=>{
        console.log("database connection faild. Exesting now...");
        console.log(error)
    });
};

