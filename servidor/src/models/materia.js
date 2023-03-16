'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var materiaSchema = new Schema({
    nombre: {type: String},
    semestreId: {type: Schema.ObjectId, ref: 'Semestre' },
    listaprofesor: [{type: Schema.ObjectId, ref: 'Profesor' }],
    listaseccion: [{type: Schema.ObjectId, ref: 'Seccion' }],
    estatus: {type: Boolean, default:true}
})


module.exports = mongoose.model('Materia', materiaSchema);
