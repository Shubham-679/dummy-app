const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

module.exports = async function(req, res, next) {

    const token =  req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied : No Token Provided')
    console.log(token)

    try {
        const decoded = jwt.verify(token , "hellohowareyou")
        console.log(decoded)
        // req.user = decoded; 
        const user = await User.findOne({_id : decoded._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        console.log(user)
        next();  
    } catch (ex) {
        res.status(400).send('Invalid Token');
        console.log(ex)
    }

}