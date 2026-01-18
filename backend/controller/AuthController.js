const UserModel = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SignupFunction = async (req, res) => {
    try {
        console.log(req.body,"req.body");
        const { name, email, password, userRole } = req.body;
        console.log(name, email, password, userRole,"signup Controller");
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'Email already exists' });
        }
        const user = new UserModel({ name, email, password, userRole });
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.status(201).json({ user, success: true, message: "Signup Success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

const LoginFunction = async (req,res)=>{
    
    try {
        const {  email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({ message: 'User Not Found', success: false });
        }
        
        const isPassEqual = await bcrypt.compare(password,existingUser.password);
        if(!isPassEqual){
            return res.status(403).json({ message: 'Invalid Password', success: false });
        }

        const jwtToken = jwt.sign(
                {email:existingUser.email, _id:existingUser._id},
                process.env.JWT_Secret,
                {expiresIn:"20m"}
        )
        

        res.status(200).json({ existingUser, success: true, message: "LOGIN Success",jwtToken,email, name: existingUser.name, userRole:existingUser.userRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false,error });
    }

}

const ProfileFunction = async (req, res) => {
    
// console.log(req.query.email,"req.body");

const {email,_id}= req.user;
    try{
       
        const AllUserDetails = await UserModel.find({email});
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}

const LogOutFunction = async (req,res)=>{
try {
    // console.log(req.body,"req.body");
        const {  _id, email } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({ message: 'User Not Found', success: false });
        }
        
        // await UserModel.findByIdAndUpdate(_id,{loginedOn: loginedOn_data},{new:true})

// console.log(updateLoginedOn,"<=================updateLoginedOn")
        
        res.status(200).json({ existingUser, success: true, message: "LOGOUT Success"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

module.exports = {LoginFunction,SignupFunction,ProfileFunction, LogOutFunction};