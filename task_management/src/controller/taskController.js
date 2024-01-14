// const db = require("../models")

// const Task = db.tasks
const Tasks = []

const showTasks = async(req, res) => {
    console.log(" show tasks get requested ... ", Tasks)
    res.render('tasks', {tasks : Tasks})
}

const addTask = async(req, res) => {
    const newTask = req.body.task
    console.log(" get task post requested --->>> ", newTask)
    Tasks.push(newTask);
    res.redirect('/')
}

module.exports = {
    addTask,
    showTasks
}