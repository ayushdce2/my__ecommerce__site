const ProductModel = require("../models/Product.js");
const CategoryModel = require("../models/Category.js")

const viewFrontOfficeProduct = async (req,res)=>{
  
console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_product = await ProductModel.find()

// console.log(products,">===============products")
  res.status(200).json({ all_product, success:true });
}

const viewFrontOfficeCategory = async (req,res)=>{
  
console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_category = await CategoryModel.find().sort({catpriority:1})

// console.log(products,">===============products")
  res.status(200).json({ all_category, success:true });
}

module.exports = {viewFrontOfficeProduct, viewFrontOfficeCategory };