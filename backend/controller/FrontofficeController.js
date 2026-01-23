const ProductModel = require("../models/Product.js");
const CategoryModel = require("../models/Category.js");
const CustomerLeadModel = require("../models/CustomerLead.js");

const viewFrontOfficeProduct = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_product = await ProductModel.find()

// console.log(products,">===============products")
  res.status(200).json({ all_product, success:true });
}

const viewFrontOfficeCategory = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_category = await CategoryModel.find().sort({catpriority:1})

// console.log(products,">===============products")
  res.status(200).json({ all_category, success:true });
}

const addClientLead = async(req,res)=>{
  
  // console.log(customer,items,"<===========req.body");

  try{
  
const{customer,items}=req.body;
const{name,email, phone, address}=customer;
  const {productId,productName,price, quantity,total}=items[0];
  
    const pushedData = new CustomerLeadModel({name, email, phone, address, productName, quantity, price});
await pushedData.save();

  res.status(201).json({ success: true, message: "We will contact Soon" });
}catch(error){
  console.log(error);
res.status(500).json({ error, success:false,message:"Error" });
}


  
}
module.exports = {viewFrontOfficeProduct, viewFrontOfficeCategory,addClientLead };