const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  categoryname: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
        type: String,
    required: true,
    trim: true,
    },
  imageFile:{
    type: String,
  },
  status: {
    type: String,
    
  }
 
},{
  timestamps:true
});


const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
