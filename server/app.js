const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const session = require('express-session')
let User = require('./models/users.model');
// const axios = require('axios');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'notagoodsecret' }))
mongoose.connect('mongodb://localhost:27017/GiphyApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //console.log("Mongo connection open")
    })
    .catch(err => {
        //console.log("Error")
        //console.log(err)
    })

const usersRouter = require('./routes/users');
const favouriteRouter = require('./routes/favourite');

app.use('/users', usersRouter);
app.use('/favourite', favouriteRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
