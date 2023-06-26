const Task = require("../../model/task")


// app.get('/api/tasks', async (req, res) => {
exports.queryTask = async (req, res) => {
    try {
        const { status, priority, assignedUser } = req.query;

        // Build the query object
        const query = {};

        // Add criteria to the query based on the provided parameters
        if (status) {
            query.status = status;
        }
        if (priority) {
            query.priority = priority;
        }
        if (assignedUser) {
            query.assignedUser = assignedUser;
        }

        const tasks = await Task.find(query);
        res.status(200).send(tasks)
        console.log("Query by find Task succussfull", tasks)
        // res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};