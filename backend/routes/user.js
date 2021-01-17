const express = require("express");
const User = require("../model/userModel");
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../middlewares/auth')

router.get('/' , auth , async (req, res) => {
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
        const salt = await bcrypt.genSalt(10);  
        user.password = await bcrypt.hash(user.password , salt);
        await user.save();
        const token = await user.generateAuthToken();
        res.header('x-auth-token', token).status(201).send(user);
        // res.status(201).send(user);
        // res.status(201).send({user , token});  
    } catch (e) {
        res.status(400).send(e);
    }
})

router.post('/login',  async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.status(201).send({ user , token});
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

router.get('/logout', auth, async (req, res)=>{
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token != req.token)
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router ;