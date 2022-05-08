const routes = require("express").Router();
const CustomerMainRoute = require("./CustomerRoutes");
const StoresMainRoute = require("./StoresRoutes");
const PurchaseMainRoute = require("./PurchaseRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");


routes.use("/customer", CustomerMainRoute);

routes.use("/stores", StoresMainRoute);


routes.use("/purchase", PurchaseMainRoute);

routes.use("/employee", EmployeeMainRoute);

module.exports = routes;
