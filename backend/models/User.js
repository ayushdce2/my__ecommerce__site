const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
   
    password:{
        type:String,
        required:true,
    },
    userRole:{
        type:String,
        required:true,
    },
    
  
  leaveBalance:{
    type:Number,
    default:5

  }
  
   
  
},
{
    timestamps:true
})

const UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;