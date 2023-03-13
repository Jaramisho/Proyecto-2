import { Router } from "express";
import { productos } from "../models/productos";


//const mdproductos = require('../models/productos');

    const router = Router();

    router.get("/", (req, res) => {
      res.render("index");
    });

    router.post("/productos/agregar", async (req, res) => {
     console.log(req.body);
     try
     {
      const nuevoProducto = new productos(req.body);
      await nuevoProducto.save();
      //const productos = productos(req.body);
      //const productosAlmacenado = await productos.save();
      //console.log(productos);
      return res.send("productosAlmacenado");
     }
     catch(error){
      console.log(error);
      return res.send("Hola mundo Falle");
      }
    });

    router.get("/update", (req, res) => {
      res.render("editar");
    });

    export default router;
  
