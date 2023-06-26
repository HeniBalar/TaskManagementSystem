const Task = require('../../model/task')

exports.taskAdd = async (req, res) => {
    try {
        const { task_title, description, status, priority, dueDate } = req.body;

        if (!(task_title && description && status && priority && dueDate)) {
            console.log("data required")
            throw new Error("all field required");
        }
        const task = new Task({
            ...req.body,
            assignedUser: req.user._id
        })
        await task.save()
        console.log("created task", task)
        res.status(200).send(task)
    } catch (error) {
        console.log("error", error);
        res.status(400).send({ error: error.message });
    }

}