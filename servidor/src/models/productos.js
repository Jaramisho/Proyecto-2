//import { Module } from "module";
//import { Schema, model } from "mongoose";
//const mongoose = require("mongoose");

'use strict'

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('productos', productoEsquema);
