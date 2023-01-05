const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    birthday : {
        type: Date,
        required: true,
    },
    weight:{
        type:Number,
        require:true
    },
    steps: {
        type: Number,
        default: 0
      },
      isRunning: {
        type: Boolean,
        default: false
      }
})

const Chickendb = mongoose.model('chickendb', schema);

module.exports = Chickendb;