'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var profesorSchema = new Schema({
    nombre: {type: String},
    estatus: {type: Boolean, default:true}
})


module.exports = mongoose.model('Profesor', profesorSchema);