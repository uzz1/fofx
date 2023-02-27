const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: [true, "Stock id is required"]
    },
    stock: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Stock name is required"]
    },
    industry: {
      type: String,
      trim: true,
      required: false,
      default: "n/a"
    },
    sector: {
        type: String,
        trim: true,
        required: false,
        default: "n/a"
      },
    currency_code: {
        type: String,
        trim: true,
        required: [true, "Currency code is required"]
      },  
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Stock", stockSchema);
