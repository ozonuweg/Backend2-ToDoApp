const express = require("express");
const res = require("express/lib/response");
const userRoute = require('./routes/user');
const mongoose = require("mongoose");
require('dotenv/config');
const app = express();
// app.use('/calender', (req, res, next)=>{
//     res.send('This is the calender!');
// });
app.use('/', userRoute)
.use('/user', userRoute);

mongoose.connect(
    process.env.mongodbURL,
    ()=> (console.log('DB connected'))

);

app.listen(3000);