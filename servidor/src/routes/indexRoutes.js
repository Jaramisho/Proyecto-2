import { Router } from "express";
//import productos from "../models/productos";


import { productos } from "../models/productos";


const router = Router();

 router.get("/", (req, res) => {
    res.render("index");
  });

  router.post("/productos/agregar", async (req, res) =>{
    
    const productos = productos(req.body);
    const productosAlmacenado = await productos.save();
    console.log(productos);
    res.send("productosAlmacenado");
  });
  
  router.get("/update", (req, res) => {
    res.render("editar");
  });


  



  export default router;
  