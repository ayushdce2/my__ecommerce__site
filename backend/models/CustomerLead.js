const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerLeadSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    phone: {
      type: String,
    },
    address: {
      type: String,
    },
items: [
    {
      productId: String,
      productName: String,
      price: Number,
      quantity: Number,
      total: Number,
      vendor_email: String
    }
  ],
    productName: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: String,
    },
    productId:{
      type: String,
    },
    vendor_email:{
      type: String,
    }
  },
  {
    timestamps: true,
  },
);

const CustomerLeadModel = mongoose.model("Customer", CustomerLeadSchema);

module.exports = CustomerLeadModel;
