const UserModel = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudinary");

const SignupFunction = async (req, res) => {
    try {
        console.log(req.body,"req.body");
        const { name, email, password, userRole,phone_number,company_name } = req.body;
        console.log(name, email, password, userRole,"signup Controller");
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'Email already exists' });
        }
        const user = new UserModel({ name, email, password, userRole,phone_number,company_name });
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

        // console.log(existingUser.userRole,"<======existingUser")
        if(existingUser.userstatus=="Disable" || existingUser.userstatus !="Active"){
            return res.status(403).json({ message: 'No Permission, contact Admin', success: false });
        }

        // if(existingUser.userRole=="admin"){
        //     return res.status(403).json({ message: 'Admin accounts are not allowed', success: false });
        // }
        
        const isPassEqual = await bcrypt.compare(password,existingUser.password);
        if(!isPassEqual){
            return res.status(403).json({ message: 'Invalid Password', success: false });
        }
// console.log(existingUser,"existingUser")
const existinguserRole = existingUser.userRole;
        const jwtToken = jwt.sign(
                {email:existingUser.email, _id:existingUser._id,userRole:existinguserRole},
                process.env.JWT_Secret,
                // {expiresIn:"20m"}
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

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const {
      name,
      phone_number,
      company_name,
      address,
      avatar,
      avatarPublicId
    } = req.body;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 🧠 delete old image ONLY if new image is uploaded
    if (
      avatar &&
      user.avatarPublicId &&
      user.avatarPublicId !== avatarPublicId
    ) {
      try {
        await cloudinary.uploader.destroy(user.avatarPublicId);
      } catch (err) {
        console.error("Cloudinary delete error:", err.message);
        // don't block update if delete fails
      }
    }

    // 📝 update fields
    user.name = name ?? user.name;
    user.phone_number = phone_number ?? user.phone_number;
    user.company_name = company_name ?? user.company_name;
    user.address = address ?? user.address;

    if (avatar) {
      user.avatar = avatar;
      user.avatarPublicId = avatarPublicId;
    }

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      avatar: user.avatar,
      avatarPublicId: user.avatarPublicId,
      user
    });
  } catch (error) {
    console.error("Update user error:", error);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};

module.exports = updateUserProfile;

module.exports = {LoginFunction,SignupFunction,ProfileFunction, LogOutFunction,updateUserProfile};