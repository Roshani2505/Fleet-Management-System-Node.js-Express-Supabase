const fs=require("fs");
module.exports=(req,res,next)=>{
    const log = `${new Date().toISOString()}|${req,method}|${req.url}\n`;
    fs.appendFileSync("logs.text",log);
    next();
};