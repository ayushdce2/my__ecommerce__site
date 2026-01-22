const UserModel = require("../models/User.js");


const getAllUsers = async (req,res)=>{
  
console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  try{

  const {
    search = "",
    sort = "desc",
    page = 1,
    limit = 5,
  } = req.query;

  const query = {
    $or: [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ],
  };

  const users = await UserModel.find(query)
    .sort({ createdAt: sort === "asc" ? 1 : -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await UserModel.countDocuments(query);
console.log(users,"<========users",total)
  res.json({
    users,
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      page: Number(page),
    },
  });

  }catch(error){
    console.log(error,"<==========error")
  }

}


const updateusers = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
const { value, userID } = req.body;

  try{




const user = await UserModel.findByIdAndUpdate(
      userID,
      {userstatus:value},
      { new: true, runValidators: true }
    );
   if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

  res.json({
    user,
    success:true
  });

  }catch(error){
    console.log(error,"<==========error");
    res.status(400).json({ message: "Invalid user ID" });
  }

}

module.exports = {getAllUsers, updateusers };