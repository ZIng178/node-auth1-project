const bcrypt=require("bcryptjs")
const router = require("express").Router();
const Users = require("../users/user-model"); 

router.post("/register", (req,res)=>{
    const UserInfo=req.body;
     const hash=bcrypt.hashSync(UserInfo.password, 8)
    // console.log(UserInfo)
     UserInfo.password=hash;
    Users.add(UserInfo)
    .then(user=>{
        console.log(user)
        res.status(201).json(user)
    })
    .catch(err=>res.send({message:"cannot add user",err}))
})

router.post("/login", (req,res)=>{
    const {username,password}=req.body
    Users.findBy({username})
    .then()
})
router.get("/register", (req, res) => {
res.send("from router")
  });

module.exports=router