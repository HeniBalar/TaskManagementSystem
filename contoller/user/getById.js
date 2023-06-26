//---By ID-----
// const User=require('../../model/user');
// exports.getuserbyID = async(req,res)=>{
//     const _id=req.params.id
//     try {
//         const user=await User.findById(_id)
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//             res.status(500).send()
//     }
// }


//------AUTHENTICATION===
const User = require('../../model/user');
exports.getuserbyAuth = async (req, res) => {
    console.log('authentati...')
    try {
        const users = await User.findById(req.user._id)
        console.log('authentattryvbyhklvyh.', users)
        res.send(users)
    } catch (error) {
        console.log("er.......", error)
        res.status(400).send(error)
    }
}