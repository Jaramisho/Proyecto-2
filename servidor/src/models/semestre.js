'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var semestreSchema = new Schema({
    nivel: {type: Number, default: '0'},
    materias: [{type: Schema.ObjectId, ref: 'Materia' }],
    estatus: {type:Boolean,default:true}
})


module.exports = mongoose.model('Semestre', semestreSchema);