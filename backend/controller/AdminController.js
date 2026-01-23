const UserModel = require("../models/User.js");
const CustomerLeadModel = require("../models/CustomerLead.js")


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

const getCustomerLeads = async (req,res)=>{
try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const { product, sort } = req.query;

    // Filter
    let filter = {};
    if (product) {
      filter.productName = { $regex: product, $options: "i" };
    }

    // Sort
    let sortOption = { createdAt: -1 }; // newest default
    if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    }

    const total = await CustomerLeadModel.countDocuments(filter);
    const leads = await CustomerLeadModel.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      leads,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {getAllUsers, updateusers ,getCustomerLeads};