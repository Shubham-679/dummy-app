const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();


router.get('/' , async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).send(tasks)
    } catch (error) {
        res.status(500)
    }
})

router.post('/' , async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task);    
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router ;