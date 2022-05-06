const routes = require("express").Router();
const StoresMainRoute = require("./StoresRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");


routes.use("/stores", StoresMainRoute);
routes.use("/employee", EmployeeMainRoute);

module.exports = routes;
