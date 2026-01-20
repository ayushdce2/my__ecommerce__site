// const UserModel = require("../models/User.js");
const ProductModel = require("../models/Product.js");
const cloudinary = require("../config/cloudinary");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const addProductfunction = async (req, res) => {
    try {
        // console.log(req.body,"req.body");
        // console.log(req.user,"req.user")
        const {email,userRole} = req.user;
        const { pname, pprice, pcategory, pstock, pdescription, pimage } = req.body;
        console.log(pimage,"<=========pimage")
        // console.log(name, email, password, userRole,"signup Controller");
        const existingProduct = await ProductModel.findOne({ pname:pname.trim(),pcategory });
        if (existingProduct) {
            return res.status(409).json({ success: false, message: 'Product already exists' });
        }
        const product = new ProductModel({ pname, pprice, pcategory, pstock, pdescription, pimage,email });
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
const product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
}

const DeleteProduct =async (req,res)=>{
await ProductModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
}
module.exports = {addProductfunction, ViewAllProducts,UpdateProduct,DeleteProduct };