const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({
    task_title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    // completed:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // },
    status:{
        type:String,
        required:true,
        trim:true
    },
    priority:{
        type:String,
        required:true,
        trim:true
    },
    dueDate:{
        type:Date,
        required:true,
        trim:true
    },
    assignedUser:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'   //this user same as a user.js(models)
    }
},{
    timestamps:true
})


const Task = mongoose.model('Task',taskSchema)

module.exports=Task
