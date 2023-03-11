import { Schema, model } from "module";

//const mongoose = require('mongoose'); 

const productoEsquema = new Schema (
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

export default model("productos", productoEsquema);

//export default mongoose.model('productos', productoEsquema);

//var User= mongoose.model('user', UserSchema);
