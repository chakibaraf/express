import { Request,Response, Router } from "express"
import { UserModel } from "../model/users.model"

export class UserController {

    private model : UserModel

    constructor (model:UserModel){
        this.model = model 
    }

    getUsers = async(req :Request,res:Response)=> {
        
           const data =  await this.model.getUsers().then(response => response.data)
            console.log(data);
            
        
             res.render('userlist', {data})
       

}

getDetails = async (req:Request, res:Response)=>{
    const id = req.params.id

    const detail = await this.model.getDetails(id).then(res => res.data)

    res.render ('details',{detail})

}

getDelate = (req:Request,res:Response)=>{
    const id = req.params.id 
    
      this.model.getDelate(id)

    res.redirect ('userlist')

}

}