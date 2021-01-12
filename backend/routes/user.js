const express = require("express");
const User = require("../model/userModel");
const router = express.Router();

router.get('/' , async (req, res) => {
    try {
        const users = await User.find({});
        res.status(201).send(users)
    } catch (error) {
        res.status(500)
    }
})

router.post('/' , async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user);    
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router ;