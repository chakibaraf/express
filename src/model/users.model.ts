import axios from "axios"
import 'dotenv/config';



export class UserModel {


    //attribut 
     URI =  process.env.URI ;
    
  //methode

  getUsers = ()=>{
    return axios.get(`${this.URI}  `)
  }

  getDetails = (id:string)=> {
    
    return axios.get(`${this.URI}/${id}`)
  }

  getDelate = (id:string)=> {
    
    axios.delete(`${this.URI}/${id}`)
  }

}