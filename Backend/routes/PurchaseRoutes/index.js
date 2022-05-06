const routes = require("express").Router();
const PurchaseRoutes = require("../../controller/purchase");
const upload = require("../../utils/multer");


routes.post("/add-purchase-details",  PurchaseRoutes.addPurchasedItemDetails);


module.exports = routes;