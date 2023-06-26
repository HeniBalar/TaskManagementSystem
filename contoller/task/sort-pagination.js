const Task=require("../../model/task")
const User=require("../../model/user")

exports.pagination= async(req,res)=>{
    let _id=req.user._id
    const match = {}
    const sort = {}
    if(req.query.status){
        match.completed=req.query.status === 'completed'
    }

    if(req.query.sortBy){
        const parts=req.query.sortBy.split(":")
        sort[parts[0]] = parts[1]==='desc' ? -1 : 1 
    }
    // console.log('dhdhdtf',req.query.completed=='true')
    // try {
        await User.findById(_id).populate({
    //  await req.user.populate({
        path:'mytask',
        match,
        options: {
            limit:parseInt(req.query.limit),
            skip:parseInt(req.query.skip),
            sort 
            // sort:{       
            //     completed: 1  //asending       (-1)desending order
            // }   
        }

    // })
     }).then((user)=>res.send(user.mytask),console.log("succuss")).catch((err)=>res.send(err.message))
    //  res.send(req.user.mytask)
    // } catch (error) {
    //  res.status(404).send({error:error.message})
    // } 
 }





