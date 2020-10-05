const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb+srv://pulga666:password666@cluster-nodejs.rqvnt.mongodb.net/posts-app?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(bodyParser.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to the DB');
    server.listen(8080, () => {
        console.log('Server up and running');
    });
});