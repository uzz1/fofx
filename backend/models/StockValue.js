const mongoose = require("mongoose");

const stockValueSchema = new mongoose.Schema(
  {
    stock_id: {
      type: Number,
      required: [true, "Stock-value id is required"]
    },
    date: {
      type: String,
      required: [true, "Stock-value date is required"]
    },
    value: {
      type: Number,
      required: [true, "Stock-value value is required"]
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("StockValue", stockValueSchema, "stock-values");
