const express = require('express');
const app = express();

//Middleware
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//ROUTE
app.get('/', (req,res) => {
    res.send('We are on home');
});

//How to start listen to the server
app.listen(3000);

//Connect to DB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restdb', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function(){
    console.log('Connection successful...');
}).on('error', function(error){
    console.log('error is: ', error);
});