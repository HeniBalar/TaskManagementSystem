const User=require("../../model/user")


exports.logoutUser= async (req,res)=>{
    try {
        req.user.tokens=[]
        await req.user.save()
        res.send({msg:"User logout"})
    } catch (error) {
        res.status(500).send(error)        
    }
}