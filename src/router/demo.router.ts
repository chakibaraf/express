import  express  from "express";
import { DemoModel } from "../model/demo.model";
import { DemoController } from './../controller/demo.controller';

const router = express.Router();
const model = new DemoModel();
const controller = new DemoController(model);

router.get('/',controller.getString)
router.get('/page',controller.getPage)
router.get('/test/:id',controller.getTest)
router.post('/',controller.postString)

export default router ;