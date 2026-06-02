import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


const router = express.Router();

const generateToken =(id)=>{
    jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"});
}

// POST /api/auth/register
router.post('/register', async (req, res)=>{
    const { name, email, password, college, branch, semester } = req.body;

    try{
        const existing = await User.findOne({email});
        if (existing) return res.status(400).json({ message: "Email already in use" });
        const hashed = await bcrypt.hash(password, 10);

        const user= await User.create({
            name, email, password: hashed, college, branch, semester,
        });
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    });
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

// POST /api/auth/login
router.post("/login",async(req,res)=>{
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({ message: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({ message: "Invalid credentials" });

        res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})
export default router;