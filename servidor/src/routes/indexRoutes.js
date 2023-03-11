import { Router } from "express";
import productos from '../models/productos';


const router = Router();

 router.get("/", (req, res) => {
    res.render("index");
  });

  router.post("/productos/agregar", (req, res) =>{
    const productos = productos(req.body);
    console.log(productos);
    res.send("Almacenado");
  });
  
  router.get("/update", (req, res) => {
    res.render("editar");
  });


  



  export default router;
  