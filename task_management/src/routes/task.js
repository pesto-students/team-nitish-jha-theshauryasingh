const taskController  = require("../controller/taskController.js")
const { requireAuth } = require("../middleware/authMiddleware")

const router = require("express").Router();

router.get('/', requireAuth, (req, res) => {
    res.render('index');
  });
router.get("/tasks", requireAuth, taskController.showTasks)
router.post("/task", requireAuth, taskController.addTask)

module.exports = router;