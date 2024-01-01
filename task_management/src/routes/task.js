const taskController = require("../controller/taskController.js")

const router = require("express").Router();

router.get("/tasks", taskController.showTasks)
router.post("/task", taskController.addTask)

module.exports = router;