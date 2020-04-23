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
   const {username,password}=req.body;
   Users.findBy({username})
   .then(([user])=>{
       if(user &&bcrypt.compareSync(password,user.password)){
       //if the user exists and the password matches 
       res.status(200).json({username:user.username})
       }else{
           res.status(401).json({message:"Invalid credentials"})
       }
   })
   .catch(err=>{
       res.status(501).json({message:"Cannot log in ", err})
   })
})

router.get("/users", (req, res) => {
Users.find()
.then(users=>{
  res.status(200).json(users)
})
.catch(err=>{
    res.status(500).json({message:"Cannot find users", err})
})
  });

module.exports=router