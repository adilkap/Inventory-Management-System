const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    receivedDate: Date,
    shippedDate: Date,
})

const Itemdb = mongoose.model('itemdb', schema);

module.exports = Itemdb;