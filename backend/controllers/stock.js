const Stock = require("../models/Stock");
const StockValue = require("../models/StockValue");

exports.getStocks = async (req, res, next) => {
    try {
        if (!req.admin) {
            if (!req.user) {
                return res.status(400).send("You dont have permission");
            }
        } 
        return res.status(200).json(await Stock.find().lean())
      
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
exports.getStockValues = async (req, res, next) => {
    try {
        if (!req.admin) {
            if (!req.user) {
                return res.status(400).send("You dont have permission");
            }
        } 
      return res.status(200).json(await StockValue.find().lean())

      
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  