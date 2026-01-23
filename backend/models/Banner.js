const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerSchema = new Schema(
  {
    title: {
      type: String,

      trim: true,
    },
    subtitle: {
      type: String,

      trim: true,
    },
    link: {
      type: String,
    },
    status: {
      type: String,
    },

    pimage: {
      type: String,
    },
    imgPublicId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const BannerModel = mongoose.model("Banner", BannerSchema);

module.exports = BannerModel;
