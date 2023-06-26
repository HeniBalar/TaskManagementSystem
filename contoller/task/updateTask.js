const Task = require("../../model/task")

exports.updateTask = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['task_title', 'description', 'status','priority','dueDate']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!!' })
    }
    try {
        const task = await Task.findOne({ _id: req.params.id, assignedUser: req.user._id })
        // const task=await Task.findById(req.params.id)
        if (!task) {
            return res.status(200).send("task not found")
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
}
