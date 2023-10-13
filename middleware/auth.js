const auth=(req,res,next)=>{
    if(!req.body.token){
        res.status(401).json({"message":"Not authorized"})
    }
    else next()
}
module.exports=auth