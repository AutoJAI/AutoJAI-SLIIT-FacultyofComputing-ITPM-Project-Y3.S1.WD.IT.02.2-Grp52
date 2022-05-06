const routes = require("express").Router();
const StoresMainRoute = require("./StoresRoutes");
const PurchaseMainRoute = require("./PurchaseRoutes");




routes.use("/stores", StoresMainRoute);


routes.use("/purchase", PurchaseMainRoute);

module.exports = routes;
