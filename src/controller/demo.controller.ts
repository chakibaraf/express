import { Request,Response, Router } from "express"
import { DemoModel } from './../model/demo.model';

export class DemoController {

        private model: DemoModel;

        constructor(model:DemoModel){
            this.model = model
        }
    getString =(req :Request,res:Response)=> {
       // const data =["margaux","fred","jaques"]; 
         const data =  this.model.send()

       //instanciation de mon objet (avec mon tableau de prenom)
       
       //execution de ma fonction mettre a l'interieur de
       // mon objet data : ma data + la fonction send
            res.render('demo', {data})
       
    }

     getPage = (req :Request,res:Response)=> {
         res.render('page')
    }

    getTest = (req :Request,res:Response)=> {
        const id = req.params.id
        res.render('test',{id})
    }

    postString = (req :Request,res:Response)=>{
        console.log();

        res.send(req.body.message);
         res.send("message yes");

    }
}

