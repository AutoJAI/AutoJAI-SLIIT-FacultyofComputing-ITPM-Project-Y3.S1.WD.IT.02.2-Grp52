const routes = require("express").Router();
const PurchaseRoutes = require("../../controller/purchase");
const upload = require("../../utils/multer");


routes.post("/add-purchase-details",  PurchaseRoutes.addPurchasedItemDetails);

routes.get("/get-all-purchased-details", PurchaseRoutes.getAllPurchasedItemsDetails);

routes.get("/get-all-purchased-details/:id", PurchaseRoutes.getPurchasedItemsDetailsById);

routes.put("/update-purchase-details/:id", PurchaseRoutes.updatePurchaseDetails);

routes.delete("/delete-purchase-item/:id", PurchaseRoutes.deletePurchase);


module.exports = routes;