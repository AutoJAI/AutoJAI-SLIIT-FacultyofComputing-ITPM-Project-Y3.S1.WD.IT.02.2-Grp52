const routes = require("express").Router();

const StoresMainRoute = require("./StoresRoutes");
const PurchaseMainRoute = require("./PurchaseRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");




routes.use("/stores", StoresMainRoute);


routes.use("/purchase", PurchaseMainRoute);

routes.use("/employee", EmployeeMainRoute);

module.exports = routes;
