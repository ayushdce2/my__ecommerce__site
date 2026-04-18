const ProductModel = require("../models/Product.js");
const CategoryModel = require("../models/Category.js");
const CustomerLeadModel = require("../models/CustomerLead.js");
const BannerModel = require("../models/Banner.js")

const viewFrontOfficeProduct = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;
const activeCategories = await CategoryModel.find({ status: "Active" }).select("_id");
  // const all_product = await ProductModel.find();
  const all_product = await ProductModel.find({
  category: { $in: activeCategories.map(c => c._id) },
  pstatus: "Active"
});

// console.log(products,">===============products")
  res.status(200).json({ all_product, success:true });
}

const viewFrontOfficeCategory = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_category = await CategoryModel.find({ status: "Active" }).sort({catpriority:1})

// console.log(products,">===============products")
  res.status(200).json({ all_category, success:true });
}

const addClientLead = async(req,res)=>{
  
  // console.log(customer,items,"<===========req.body");

  try{
  
const{customer,items}=req.body;
const{name,email, phone, address}=customer;
  const {productId,productName,price, quantity,total,vendor_email}=items[0];
  // console.log(vendor_email,"<=========vendor_email")
    const pushedData = new CustomerLeadModel({name, email, phone, address, productName, quantity, price,productId,vendor_email});
await pushedData.save();

  res.status(201).json({ success: true, message: "We will contact Soon" });
}catch(error){
  console.log(error);
res.status(500).json({ error, success:false,message:"Error" });
}


  
}

const viewFrontOfficeBanner = async (req,res)=>{
  
// console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_banner = await BannerModel.find()

// console.log(products,">===============products")
  res.status(200).json({ all_banner, success:true });
}

const searchFrontOfficeProducts = async (req,res)=>{
  
console.log(req.user,"req.body <==========",req.body,"<=========>",req.query);
const { searchedFor } = req.query;
try {
    const { searchedFor = "", page = 1, pageSize = 10, sort = "", category = "" } = req.query;

    const query = {};

    // Search by name (case-insensitive)
    if (searchedFor) {
      query.pname = { $regex: searchedFor, $options: "i" };
    }

    // Filter by category
    if (category) {
      query.pcategory = category;
    }

    let sortOption = {};
    if (sort === "price_asc") sortOption.pprice = 1;
    else if (sort === "price_desc") sortOption.pprice = -1;

    const skip = (Number(page) - 1) * Number(pageSize);
    const limit = Number(pageSize);

    const total = await ProductModel.countDocuments(query);
    const products = await ProductModel.find(query).sort(sortOption).skip(skip).limit(limit);

    res.json({ products, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
  // const all_product = await ProductModel.find()

// console.log(products,">===============products")
  // res.status(200).json({ all_product, success:true });
}
const ContactFormLead = async(req,res)=>{
  
  // console.log(customer,items,"<===========req.body");

  try{
  
const{customer}=req.body;
const{name,email, phone, message,address}=customer;
  // const {productId,productName,price, quantity,total}=items[0];
  
    const pushedData = new CustomerLeadModel({name,email, phone, productName:message,address});
await pushedData.save();

  res.status(201).json({ success: true, message: "We will contact Soon" });
}catch(error){
  console.log(error);
res.status(500).json({ error, success:false,message:"Error" });
}


  
}
module.exports = {viewFrontOfficeProduct, viewFrontOfficeCategory,addClientLead,viewFrontOfficeBanner,
  searchFrontOfficeProducts, ContactFormLead
 };