const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const blogroute = require('./routes/blogRoutes');
const userroute = require('./routes/userRoutes')
//const blogmodel=require('./model/BlogData');
const path = require('path');


const app = new express();
require('dotenv').config();
mongoose.connect(process.env.Mongo_DB_URL);
const PORT = process.env.PORT;
app.use(cors());
app.use(morgan('dev'));


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static((path.join(__dirname + "/build"))))


app.use('/blogs', blogroute);
app.use('/user', userroute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})