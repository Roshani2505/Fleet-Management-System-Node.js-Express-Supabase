const express=require("express")
const {createVehicle,assignDriver}=require("../controllers/vehicle.controller");

const rateLimiter=require("../middlewares/rateLimiter.middleware");

const router=express.Router();

router.post("/",rateLimiter,createVehicle);
router.patch("/assign",assignDriver);

module.exports=router;