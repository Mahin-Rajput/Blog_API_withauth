const { token } = require('morgan');
const userModel = require('../Models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config();



const createuser = async (req,res)=>{

    const {first_name, last_name, email, pw, country} = req.body;

    try{
        const existingUser = await userModel.findOne({
            email: email,
          });   
          
          if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
          }

          const user = await userModel.create({
            firstname: first_name,
            lastname: last_name,
            email: email,
            pw: pw,
            country: country,
          });

          const JWT_SECRET = process.env.JWT_SECRET;
            const token = await jwt.sign(
            { first_name: user.first_name, email: user.email, _id: user.email },
            JWT_SECRET
            );

            console.log(token);
            
            res.status(302).json({message:"created new user"})    
        } catch(err){
            console.log(err);
            res.status(500).json({message:"error"})
            

    }
}


const login = async (req,res)=>{
    const {email, pw} = req.body;

    try{

        const user = await userModel.findOne({

            email:email
        })

        console.log(user);
        

        if(!user){
            console.log("no user");
            res.status(404).json({message:'no user'})
        }

        const validPassword = await user.isValidPassword(pw);
        if (!validPassword) {
            return res.status(302).redirect("/unknown");
     
         }
        
         const token = await jwt.sign({ user: user }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          res.json({token:token})

        //   res.cookie("token", token, { httpOnly: true }, { maxAge: 60 * 60 * 1000 });

        //   res.status(302).json({message:"logged in"})    




    }catch(err){
        console.log(err);
        res.status(500).json({message:"please check details"})
        
    }




}

module.exports = {
    createuser,
    login,
};

