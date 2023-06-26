const Task = require("../../model/task")

exports.deleteTask = async (req, res) => {
    try {
        console.log('sss', req.user._id)
        const task = await Task.findOneAndDelete({ _id: req.params.id, assignedUser: req.user._id })
        if (!task) {
            res.status(200).send()
        }
        res.send(task)
    } catch (error) {
        console.log('sus...', error)
        res.status(400).send(error)
    }
}