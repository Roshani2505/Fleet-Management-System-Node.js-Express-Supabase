const supabase=require("../config/supabase")
exports.createVehicle=async(req,res)=>{
    const {name,registration_number,allowed_passenger,rate_per_km,owner_id}=req.body

    const{error}=await supabase.from("vehicles").insert([
        {name,registration_number,allowed_passenger,rate_per_km,owner_id}
    ]);
    if(error) return res.status(400).json({error});

    res.status(201).json({message:"vehicles created successfully"});

};

exports.assignDriver=async(req,res)=>{
    const{vehicle_id,driver_id}=req.body;

    await supabase
    .from("vehicles")
    .update({driver_id})
    .eq("id",vehicle_id);

    res.join({message:"Driver successfully assigned"});
};