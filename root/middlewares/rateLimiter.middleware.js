const request ={};
module.exports=(req,res,next)=>{
    const ip=req.ip;
    const now=Data.now();

    if(!request[ip])requests[ip]=[];
    requests[ip]=requests[ip].filter(t=>now-t>60000);

    if(requests[ip].length>=3){
        return res.status(429).json({message:"Too many Requests "});

    }

    request[ip].push(now);
    next();
};