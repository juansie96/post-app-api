const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    content: {
        type: 'String',
        required: true
    },
    imageUrl: {
        type: 'String',
        required: true
    },
    comments: [{
        content: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        userId: mongoose.ObjectId,
        username: 'String'
    },
    meta: {
        likes: {
            type: Number,
            default: 0
        },
    }
});

exports.mongoose.model('Post', postSchema);