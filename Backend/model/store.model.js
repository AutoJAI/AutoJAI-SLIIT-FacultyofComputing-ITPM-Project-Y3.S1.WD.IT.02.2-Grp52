const mongoose = require("mongoose");

const StoresSchema = new mongoose.Schema(
  {
    item_id: {
      type: String,
      trim: true,
    },
    item_name: {
      type: String,
      trim: true,
    },
    item_brand: {
      type: String,
      trim: true,
    },
    item_status: {
      type: String,
      trim: true,
    },
    item_price: {
      type: Number,
      trim: true,
    },
    store_url: {
      type: String,
      trim: true,
    },
    cloudinary_id: {
      type: String,
      trim: true,
    },
    
  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("store_spare_parts_details", StoresSchema);
