// const UserModel = require("../models/User.js");
const ProductModel = require("../models/Product.js");
const cloudinary = require("../config/cloudinary");
const CategoryModel = require("../models/Category.js")
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const addProductfunction = async (req, res) => {
    try {
        // console.log(req.body,"req.body");
        // console.log(req.user,"req.user")
        const {email,userRole} = req.user;
        let { pname, pprice, categoryID, pstock, pdescription, pimage,platest,pcategory } = req.body;
        console.log(pimage,"<=========pimage")
        // console.log(name, email, password, userRole,"signup Controller");

        // 🔹 Fetch category
    const categoryDoc = await CategoryModel.findById(categoryID);
    if (!categoryDoc) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    // console.log(categoryDoc,"<========categoryDoc")
    const {categoryname,status} = categoryDoc;

        if(platest == ""){
          platest="NO";
        }   
        const existingProduct = await ProductModel.findOne({ pname:pname.trim(),pcategory:categoryname });
        if (existingProduct) {
            return res.status(409).json({ success: false, message: 'Product already exists' });
        }
        console.log(existingProduct,"existingProduct")
        const product = new ProductModel({ pname, pprice, pcategory:categoryname, category:categoryID, pstock, pdescription, pimage,email,platest });
        // const image = await Image.create(req.body);
        // user.password = await bcrypt.hash(password, 10);
        await product.save();
        res.status(201).json({ product, success: true, message: "Product Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

const ViewAllProducts = async (req, res) => {
    
console.log(req.query,"req.body <==========",req.body);
const { page, limit, search, category, sortBy, order } = req.query;

  const filter = {};
  if (search) filter.pname = { $regex: search, $options: "i" };
  if (category && category !== "All") filter.pcategory = category;

  const sort = {};
  if (sortBy){ sort[sortBy] = order === "desc" ? -1 : 1;}else {
 
  sort.createdAt = -1; // or use _id: -1 if no timestamps
}

  const total = await ProductModel.countDocuments(filter);
  const products = await ProductModel.find(filter)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Number(limit));
// console.log(products,">===============products")
  res.json({ data: products, total });
// const {email,_id}= req.user;
//     try{
       
//         const AllProducts = await ProductModel.find({email});
//         // console.log(AllUserDetails)
//         res.status(200).json(AllProducts);

//         }catch(error){
//             res.status(500).json({message:error});
//         }

}

const UpdateProduct = async (req, res) => {
  console.log(req.body)
          const { pname, pprice, pcategory, pstock, pdescription, pimage } = req.body;
  try{

    //  const existingProduct = await ProductModel.findOne({ pname:pname.trim(),pcategory });
    //     if (existingProduct) {
    //         return res.status(409).json({ success: false, message: 'Product already exists' });
    //     }
const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({message: 'Updated Successfully', success: true,product});
}catch (error) {
        // console.error(error.errorResponse.codeName,"<============================error");
        res.status(500).json({ message: 'Internal Server Error', success: false ,error});
    }
}

const DeleteProduct =async (req,res)=>{
try{
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product deleted" });
  } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}


const addCategoryfunction = async (req, res) => {
    try {
        // console.log(req.body,"req.body");
        // console.log(req.user,"req.user")
        const {email,userRole} = req.user;
        const { categoryName, description, imageFile, status,catPriority } = req.body;
        
        // console.log(name, email, password, userRole,"signup Controller");
        const existingCategory = await CategoryModel.findOne({ categoryname:categoryName.trim() });
        if (existingCategory) {
            return res.status(409).json({ success: false, message: 'categoryName already exists' });
        }
        const category = new CategoryModel({ categoryname:categoryName, description, status,email,catpriority:catPriority });
        // const image = await Image.create(req.body);
        // user.password = await bcrypt.hash(password, 10);
        await category.save();
        res.status(201).json({ category, success: true, message: "category Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}

const viewCategoryfunction = async (req,res)=>{
  
console.log(req.user,"req.body <==========",req.body);
// const { page, limit, search, category, sortBy, order } = req.query;

  const all_category = await CategoryModel.find()

// console.log(products,">===============products")
  res.status(200).json({ all_category, success:true });
}

const viewMainCategoryfunction = async (req,res)=>{
// console.log(req.body,"<===req.body");
try {
    const {
      search = "",
      status,
      sortBy = "priority",
      order = "asc",
      page = 1,
      limit = 10,
    } = req.query;

    // Build filter query
    const filter = {
      categoryname: { $regex: search, $options: "i" },
    };
    if (status) filter.status = status;

    // Build sort object dynamically
    const sortField = sortBy === "status" ? "status" : "catpriority";
    const sortOrder = order === "desc" ? -1 : 1;
    const sortObj = { [sortField]: sortOrder };
console.log(sortField,"<============================>",sortOrder)
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Query categories
    const categories = await CategoryModel.find(filter)
      .sort(sortObj)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    const total = await CategoryModel.countDocuments(filter);
// console.log(categories, total,"<=================categories, total")
    res.json({ categories, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

const updateMainCategoryfunction =async(req,res)=>{
  // console.log(req.params.id,"<========req.params.id")
  // console.log(req.body,"<==========req.body,")
  const {name, status, priority, desc}=req.body;
try{
  const updated = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    {categoryname:name, status:status, catpriority:priority, description:desc},
    { new: true }
  );
  res.json(updated);
}catch(error){
  console.log(error)
}
}

const deleteMainCategoryfunction =async (req,res)=>{
  try{
await CategoryModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
  }catch(error){
    console.log(error)
  }
}

module.exports = {deleteMainCategoryfunction,updateMainCategoryfunction, addProductfunction, ViewAllProducts,UpdateProduct,DeleteProduct,addCategoryfunction,viewCategoryfunction,viewMainCategoryfunction };