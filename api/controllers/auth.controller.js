import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register =async (req,res)=>{
    console.log("Running")
    const {username, email, password} = req.body;
    //Hash the password
    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword)
    //Create the new user and save to DB
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password:hashPassword,
        },
    })

    console.log(newUser)
};

export const login = (req,res)=>{
    //DB operation
    const {username,password} = req.body;
    try{
    //Check if the user exists
    //Test
    //Check it the password is correct
    //Generate cookie token and send to the user
    }
    catch(err){
        console.log()
        res.status(500).json({message:"Failed to login"})
    }
}

export const  logout= (req,res)=>{
    //DB operation
    console.log("Logout end point")
}