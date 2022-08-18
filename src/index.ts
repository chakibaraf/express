import express, {Request, Response } from 'express';
import demoRouter from  "./router/demo.router";
import * as path from 'path';
import 'dotenv/config'
import userRouter from './router/user.router';

const app = express();
const port = process.env.PORT
//middllware
app.use(express.json());
app.use(demoRouter)

app.use(userRouter)
app.use(express.json());



//mise en place du dossier public 
app.use('/public',express.static (path.join(process.cwd(),'/src/public')))
//configuration de ejs
app.set('views', path.join(process.cwd(),'src/view'))

app.set('view engine','ejs');


app.use('/bootstrap', express.static (path.join(process.cwd(),'/node_modules/bootstrap/dist/css')))


app.listen(port,()=> {
    console.log(`serveur lancé sur le port  ${port}`);
    
})