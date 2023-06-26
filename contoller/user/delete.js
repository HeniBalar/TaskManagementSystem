const User = require('../../model/user');
const Task = require("../../model/task")

exports.deleteuser = async (req, res) => {

    //====AUTHENTICATION============
    // try {
    //     const user = await User.findByIdAndDelete(req.user._id)
    //     if (!user) {
    //         return res.status(400).send()
    //     }
    //     res.send(req.user)
    // } catch (error) {
    //     res.status(400).send(error)
    // }



    //-------By ID-----
    const _id = req.params.id
    try {
        const user = await User.findByIdAndDelete(_id)
        const task = await Task.deleteMany({ assignedUser: req.user._id })
        // if (!user) {
        //     return res.status(404).send("user not found")
        // }
        res.status(200).send({msg:"user deleted succussfully",user, task })
        console.log("user task deleted")
    } catch (e) {
        res.status(500).send(e.message)
        console.log("errorrr")
    }

}

