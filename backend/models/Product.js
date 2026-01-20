const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  pname: {
    type: String,
    required: true,
    trim: true,
  },
  pprice:{
        type:Number,
        required:true,
    },
  pcategory:{
    type: String,
    required: true,
    trim: true,
  },
  pstock: {
    type: Number,
    required: true
  },
  pdescription: {
    type: String,
    default: null,
  },
  pimage: {
    type: String,
    default: null,
  },
  // imgPublicId: String,
   email:{
        type:String,
        required:true,
        // unique: true
    },
    platest:{
      type:String,


    }
},{
  timestamps:true
});


ProductSchema.index(
  { pname: 1, pcategory: 1 },
  { unique: true }
);



const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
