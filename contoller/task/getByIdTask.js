const Task = require('../../model/task')
const User = require("../../model/user")


exports.getByIdTask = async (req, res) => {
    // const _id = req.params.id
    try {
        const task = await Task.find({assignedUser: req.user._id })   //only task display
        // const task = await Task.find({ _id, assignedUser: req.user._id })

        if (!task) {
            return res.status(200).send("task not found")
        }
        res.status(200).send(task)
        console.log("getby id task succuss", task)
    } catch (error) {
        res.status(500).send({ error: error.message })

    }
}

