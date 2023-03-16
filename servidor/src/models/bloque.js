'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var bloqueSchema = new Schema({
    profesorId: {type: Schema.ObjectId, ref: 'Profesor' },
    seccionId: {type: Schema.ObjectId, ref: 'Seccion' },
    materiaId:{type: Schema.ObjectId, ref: 'Materia'},
    estatus: {type: Boolean, default:true}
})


module.exports = mongoose.model('Bloque', bloqueSchema);