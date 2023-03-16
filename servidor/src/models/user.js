'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = new Schema({
    avatar: {type: String, default: 'avatar.png'},

    dates: {
        dateCreated: Date,
        dateModified: Date
    },
})


module.exports = mongoose.model('User', userSchema);