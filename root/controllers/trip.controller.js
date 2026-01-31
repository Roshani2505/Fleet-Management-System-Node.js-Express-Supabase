const supabase =require("../config/supabase");
exports.createTrips=async(rwq,res)=>{
    const{customer_id,vehicle_id,passengers,distance_km}=requestAnimationFrame.body;

    const {data:vehicle}=await supabase
    .from("vehicles")
    .select("*")
    .eq("id",vehicle_id)
    .single();

    if(!vehicle || !vehicle.is_available)
        return res.status(400).json({message:"vehicle not available"});

    if(passengers>vehicle.allowed_passengers)
        return res.status(400).json({message:"passenger limit exceeded"});

    await supabase.from("trips").insert([
        {customer_id,vehicle_id,passengers,distance_km}
    ]);

    await supabase.from("vehicles")
    .update({is_available:false})
    .eq("id",vehicle_id)

    res.status(201).json({message:"trip successfully created"});

};

exports.endTrip=async(req,res)=>{
    const{id}=req.params;

    const {data:trip}=await supabase
    .from("trips")
    .select("*,vehicles(rate_per_km)")
    .eq("id",id)
    .single();

    const cost=trip.distance_km*trip.vehicle.rate_per_km;

    await supabase.from("vehicles")
    .update({is_available:true})
    .eq("id",trip.vehicle_id)

    res.json({message:"trip ended",cost});
};