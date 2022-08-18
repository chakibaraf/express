import { UserController } from "../controller/user.controller";
import  express  from "express";
import { UserModel } from "../model/users.model";


const router = express.Router();
const model = new UserModel();
const controller = new UserController(model);

router.get('/userlist',controller.getUsers)

router.get('/details/:id',controller.getDetails)

export default router