const Task = require("../../model/task")


exports.getAllTask = async (req, res) => {
   try {
      const task = await Task.find({})
      res.send(task)
   } catch (error) {
      res.status(500).send(e)
   }
}