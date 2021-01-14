const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();
const auth = require('../middlewares/auth')

router.get('/' , auth, async (req, res) => {
    try {
        console.log("get method")
        const tasks = await Task.find({owner : req.user._id})
        .populate('owner', 'name -_id')
        .select('description')
        res.status(201).send(tasks)
        console.log("get method finished")
    } catch (error) {
        res.status(500)
    }
})


router.post('/', auth, async (req, res)=>{
    console.log("inside post")
    const task = new Task({
        description : req.body.description,
        owner : req.user._id
    })
    try {
    await task.save()
    res.status(200).send(task) 
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }    
})





// router.get('/' , auth,  async (req, res)=>{
    
// try {
//    const task = await Task.find({owner : req.user._id}) 
// console.log("get method")
//     await req.user.populate({
//         path : 'tasks',
//         options : {
//             limit : parseInt(req.query.limit),
//             skip : parseInt(req.query.skip),
//         }
//         }).execPopulate()
//      res.status(201).send(req.user.tasks)
// } catch (error) {
//     res.status(500).send()  
// }

// })


// router.post('/' , async (req, res) => {
//     const task = new Task(req.body)
//     try {
//         await task.save()
//         res.status(201).send(task);    
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

module.exports = router ;