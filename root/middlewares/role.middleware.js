module.exports=(role)=>{
    return(req,res,next)=>{
        if(req.body.role!==role && req.headers.role !==role){
            return res.status(403).json({message:"Denied Access"});
        }
        next();
    };
};