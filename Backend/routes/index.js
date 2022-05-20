const routes = require("express").Router();
const CustomerMainRoute = require("./CustomerRoutes");
const StoresMainRoute = require("./StoresRoutes");
const PurchaseMainRoute = require("./PurchaseRoutes");


routes.use("/customer", CustomerMainRoute);

routes.use("/stores", StoresMainRoute);


routes.use("/purchase", PurchaseMainRoute);


module.exports = routes;
