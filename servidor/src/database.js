import { connect } from "mongoose";

(async () =>{

    try{
        const db = await connect("mongodb://localhost:27017/prueba");
        console.log("Base de datos conectada en ",db.connection.name);
    }
    catch(error){
        console.error(error);
    }
})();
