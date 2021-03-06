const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const users = require('./routes/user');
const tasks = require('./routes/task');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/users' , users);
app.use('/tasks', tasks);
app.use('/public', express.static('public'));

mongoose.connect('mongodb://localhost/Dummy',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex : true,
     useFindAndModify: false
})
.then(()=>{console.log("Connected to mongoDB")})
.catch(()=>{console.log("Connection failed")})

app.listen(4000, () => {
    console.log("Server is up and running on PORT : 4000")
})