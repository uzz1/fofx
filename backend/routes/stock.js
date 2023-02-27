const { Router } = require("express");
const isAuth = require("../middleware/is-member");

const stockController = require("../controllers/stock");

const router = Router({ strict: true });

router.get("/", isAuth, stockController.getStocks);
router.get("/stock-values", isAuth, stockController.getStockValues);

module.exports = router;