import {Router} from "express";
import {addCustomer,getCustomerData} from "../controller/customer";

const router = Router();

router.get("/",getCustomerData);
router.post('/',addCustomer);

export default router;