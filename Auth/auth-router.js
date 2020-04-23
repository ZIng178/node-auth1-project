const bcrypt=require("bcryptjs")
const router = require("express").Router();
const Users = require("../users/user-model"); 

router.post("/register", (req,res)=>{
    const UserInfo=req.body;

    Users.add(UserInfo)
    .then(user=>{
        res.json(user)
    })
    .catch(err=>res.send(err))
})

router.get("/register", (req,res)=>{
    res.send("from res")
})

module.exports=router