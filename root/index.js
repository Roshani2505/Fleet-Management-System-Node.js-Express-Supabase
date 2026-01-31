require("dotenv").config();
const express=require("express");
const logger=require("./middlewares/logger.middleware");

const userRoutes=require("./routes/user.routes");
const vehicleRoutes=require("./routes/vehicle.routes");
const tripRoutes=require("./routes/trip.routes");
const app=express();
app.use(express.json());
app.use(logger);
app.use("/users",userRoutes);
app.use("/vehicles",vehicleRoutes)
app.use("/trips",tripRoutes);

app.use((req,res=>{
    res.statusCode(404).json({message:"request not found"});
}));
app.listen(process.env.PORT,()=>{
    console.log("server running on port",process.env,PORT)
});


