import express from "express";
import {getquery} from '../../controllers/Query/query.js'
const router=express.Router();

router.get("/", getquery);
export default router;