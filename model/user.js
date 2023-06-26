const mongoose=require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    DOB:{
        type: Date,
        required: true,
        trim: true,
    },
    mobile_no:{
        type:Number,
        default:null
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
        tokens:[{
        token:{
        type:String
    }
}]
},{
    timestamps:true
})

userSchema.virtual('mytask',{
    ref:'Task',
    localField:'_id',
    foreignField:'assignedUser'
})

userSchema.methods.generateAuthToken=async function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}

// userSchema.pre('remove', async function (next) {
//     const user = this
//     await Task.deleteMany({ assignedUser: user._id })
//     next()
// })

const User=mongoose.model("User",userSchema);
module.exports=User