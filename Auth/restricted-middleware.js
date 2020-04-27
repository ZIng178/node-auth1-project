module.exports=(req,res,next)=>{
if (req.session && req.session.user){
    nexr()
}else{
    res.status(401).json({message: "Oops! Cannot log you in "})
}
}