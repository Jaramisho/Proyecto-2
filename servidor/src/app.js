import express from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs, { create } from "express-handlebars";
import path from 'path'; //modulo de node
import engine  from 'express-handlebars';
import morgan from "morgan";


const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: 'main',
        extname: '.hbs',
    })
);
const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join("src/views", "layouts"),
    defaultLayout:'main'
});


app.set("view engine", ".hbs");

//middleware
app.use(morgan('inicio'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use(indexRoutes);

export default app; //Exportando el app

