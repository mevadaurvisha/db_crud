const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    img:{
        type: String,
    }
});

const todoM = mongoose.model('todos' , todoSchema);

module.exports = todoM;