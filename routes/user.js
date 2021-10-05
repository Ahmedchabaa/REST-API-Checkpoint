const express = require ("express");

const userRouter = express.Router();

const User = require("../models/user");



userRouter.post("/",async(req,res)=>{
  try {
    
     const newUser= new User(req.body)
     const result=await newUser.save()
     res.send({user:result,msg:"user added"})
     console.log(req.body)
  } catch (error) {
      res.send(error)
  }
});
userRouter.get("/",async(req,res)=>{
  try {
    const  result = await User.find();
    res.send({users:result});
  } catch (error) {
    res.send({msg : error});
  }
});

userRouter.get("/:name",async(req,res)=>{
  try {
    const result = await User.findOne({_id:req.params.name});
    res.send({user:result});
  } catch (error) {
    res.send({msg : error});
  }
});

userRouter.delete("/:id",async(req,res)=>{
  try {
    const result = await User.findByIdAndDelete({_id:req.params.id});
    res.send({msg : "user deleted successfully"});
  } catch (error) {
    res.send({msg : error});
  }
});

userRouter.put("/:id",async(req,res)=>{
  try {
    const result = await User.findByIdAndUpdate({_id:req.params.id},{$set: {...req.body}});
    res.send({msg : "user updated successfully"});
  } catch (error) {
    res.send({msg : error});
  }
});

module.exports = userRouter;