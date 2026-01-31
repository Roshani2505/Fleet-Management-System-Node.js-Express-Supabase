const supabase=require("../config/supabase");
exports.signup=async(req,res)=>{
    const{name,email,password,role}=req.body;

    if(!name|| !email || !password || !role)
        return res.status(400).json({message:"Feilds Missing"});

    const {data:existing}=await supabase
    .from("users")
    .select("*")
    .eq("email",email)
    .single();

    if(existing)
        return res.status(409).json({message:"email already registered"});

    const {error}=await supabase.from("users").insert([
        {name,email,password,role}
    ]);
    if(error) return res.status(500).json({error});

    res.status(201).json({message:"user registered"});
};

