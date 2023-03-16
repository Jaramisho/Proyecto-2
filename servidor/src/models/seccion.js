'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var seccionSchema = new Schema({
    nombre: {type: String},
    profesor: {type: String},
    estatus: {type: Boolean, default:true}
})


module.exports = mongoose.model('Seccion', seccionSchema);