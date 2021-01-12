const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const users = require('./routes/user');
const tasks = require('./routes/task');


app.use(express.json());
app.use('/users' , users);
app.use('/tasks', tasks);

mongoose.connect('mongodb://localhost/Dummy',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex : true
})
.then(()=>{console.log("Connected to mongoDB")})
.catch(()=>{console.log("Connection failed")})

app.listen(4000, () => {
    console.log("Server is up and running on PORT : 4000")
})