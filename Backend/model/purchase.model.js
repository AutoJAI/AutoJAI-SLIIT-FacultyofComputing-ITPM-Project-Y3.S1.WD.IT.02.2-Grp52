const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    purchase_id: {
      type: String,
      trim: true,
    },
    purchase_item_name: {
      type: String,
      trim: true,
    },
    supplier: {
      type: String,
      trim: true,
    },
    item_type: {
        type: String,
        trim: true,
      },
    item_add_date: {
      type: String,
      trim: true,
    },
    item_qnty: {
      type: Number,
      trim: true,
    },
    purchased_price: {
      type: Number,
      trim: true,
    },
    total_item_price: {
      type: Number,
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

module.exports = mongoose.model("purchase_details", PurchaseSchema);
