
const express = require('express');
const show_data = require('./data');
const router = express.Router();

// Display the list of tasks (GET /tasks).
router.route('/tasks')
  .get((req, res) => {
    console.log("tasks -> get request updated")
    show_data()
    res.send("response sent")
  })
  .post((req, res) => {
    console.log("tasks -> post request")
    res.send("response sent")
  })

// View details of a specific task (GET /tasks/:id).
router.get('/tasks/:id', (req, res) => {
    // Your route logic here
  });

// Update a task's details (PUT /tasks/:id).
router.put('/tasks/:id', (req, res) => {
    // Your route logic here
  });

// Delete a task (DELETE /tasks/:id).
router.delete('/tasks/:id', (req, res) => {
    // Your route logic here
  });

module.exports = router;