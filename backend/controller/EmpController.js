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
        let { pname, pprice, pcategory, pstock, pdescription, pimage,platest } = req.body;
        console.log(pimage,"<=========pimage")
        // console.log(name, email, password, userRole,"signup Controller");
        if(platest == ""){
          platest="NO";
        }   
        const existingProduct = await ProductModel.findOne({ pname:pname.trim(),pcategory });
        if (existingProduct) {
            return res.status(409).json({ success: false, message: 'Product already exists' });
        }
        const product = new ProductModel({ pname, pprice, pcategory, pstock, pdescription, pimage,email,platest });
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
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
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
        const { categoryName, description, imageFile, status } = req.body;
        
        // console.log(name, email, password, userRole,"signup Controller");
        const existingCategory = await CategoryModel.findOne({ categoryname:categoryName.trim() });
        if (existingCategory) {
            return res.status(409).json({ success: false, message: 'categoryName already exists' });
        }
        const category = new CategoryModel({ categoryname:categoryName, description, status,email });
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


module.exports = {addProductfunction, ViewAllProducts,UpdateProduct,DeleteProduct,addCategoryfunction,viewCategoryfunction };