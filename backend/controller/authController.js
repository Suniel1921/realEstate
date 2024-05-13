const authModel = require("../model/authModel");
const bcrypt = require ("bcrypt");
const JWT = require ("jsonwebtoken");

//register controller
exports.register = async (req ,res)=>{
    try {
        const {name, email, password } = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).send({success: false, message: "All fields are required"});
        }

        //check user already exit or not
        const user = await authModel.findOne({email});
        if(user){
            return res.status(400).send({success: false, message: "User already Exit"});
        }

        //hashed password
        const hashedPassword = await bcrypt.hash(password, 10);
        //save new user in database
        const newUser = await authModel.create({name, email, password:hashedPassword});
        return res.status(201).send({success: true, message: "Register successfull", newUser});
        
    } catch (error) {
        return res.status(500).send({success: false, message: "internal server error", error})
        
    }
}


//login controller
exports.login = async (req ,res)=>{
    try {
        const {email, password} = req.body;
        //validation
        if(!email || !password){
            return res.status(400).send({success: false, message: 'Email and password is required'});
        }
        //check user exit or not
        const user = await authModel.findOne({email});
        if(!user){
            return res.status(404).send({success: false, message : "User not found"});
        }
        //check password 
        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword){
            return res.status(400).send({success: false, message: "invalid email or password"});
        }

        //generate token
        const token = JWT.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: '7d'});
        return res.status(200).send({success: true, message: 'Login successfully', user: {name: user.name, email:user.email},token})
        
    } catch (error) {
        return res.status(500).send({success: false, message: 'Internal Server Error', error})
        
    }
}


//total auth user count
exports.userCount = async (req, res)=>{
    try {
        const count = await authModel.countDocuments();
        return res.status(200).json({success: true, count})
        
    } catch (error) {
        return res.status(500).json({success: false, message: "Error while Counting Users"})
        
    }
}




//protected route controller
exports.protectedRoute = async (req ,res)=>{
    res.status(200).send({ok: true});
}

//admin route controller
exports.admin = (req, res)=>{
    res.status(200).send({ok: true});
}