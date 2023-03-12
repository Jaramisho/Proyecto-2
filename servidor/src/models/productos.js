import { Schema, model } from "mongoose";

const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

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

//const model = mongoose.model("productos", productoEsquema);

export default model("productos", productoEsquema);

//module.exports = model;
