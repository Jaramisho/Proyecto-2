import { Router } from "express";
import { productos } from "../models/productos";
import { User } from "../models/user";

const mduser = require('../models/user');

const mdsemestre = require('../models/semestre');
const mdmateria = require('../models/materia');
    const router = Router();

    router.get("/", (req, res) => {
      res.render("index");
    });

    router.post("/productos/agregar", async (req, res) => {
     console.log(req.body);
     console.log(mduser);
     try
     {
      const nuevoProducto = new mduser({avatar:"Holajara"});
      const resultado = await nuevoProducto.save();
    
      //const productos = productos(req.body);
      //const productosAlmacenado = await productos.save();
      //console.log(productos);
      return res.send(resultado);
     }
     catch(error){
      console.log(error);
      return res.send("Hola mundo Falle");
      }
    });
    //CREA SEMESTRE
    router.post("/semestre", async (req, res) => {
      console.log(req.body);
      console.log(mduser);
      try
      {
       const nuevoProducto = new mdsemestre({
          nivel: 4,
          materias: [],
          estatus: true
      });
       const resultado = await nuevoProducto.save();
     
       
       return res.send(resultado);
      }
      catch(error){
       console.log(error);
       return res.send("Hola mundo Falle");
       }
     });
     //DEVUELVE SEMESTRES
     router.get("/semestre", async (req, res) => {
      console.log(req.query);
      try
      {
       const ressemestres = await mdsemestre.find({"estatus":true});
        console.log(ressemestres);  
        if(!ressemestres){
          throw "Error"
        }
       return res.send(ressemestres.map((elem)=>{
        return {valor:`Semestre ${elem.nivel}`,id:elem._id}
       }));
      }
      catch(error){
       console.log(error);
       return res.send("Hola mundo Falle");
       }
     });
     //CREAR MATERIA
     router.post("/materia", async (req, res) => {
      console.log(req.body);
      try
      {
       const nuevoProducto = new mdmateria({
        nombre: req.body.nombre,
        semestreId: req.body.semestre,
        listaprofesor: [],
        listaseccion: [],
    });
       const resultado = await nuevoProducto.save();
     
       //const productos = productos(req.body);
       //const productosAlmacenado = await productos.save();
       //console.log(productos);
       return res.send("Lo guardé");
      }
      catch(error){
       console.log(error);
       return res.send("Hola mundo Falle");
       }
     });
     //Devuelve materias
     router.get("/materia", async (req, res) => {
      console.log(req.query);
      try
      {
       const resmaterias = await mdmateria.find({"estatus":true,"semestreId":req.query.id});
        console.log(resmaterias);  
        if(!resmaterias){
          throw "Error"
        }
        
       return res.send(resmaterias.map((elem)=>{
        return {valor:`${elem.nombre}`,id:elem._id}
       }));
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
  
