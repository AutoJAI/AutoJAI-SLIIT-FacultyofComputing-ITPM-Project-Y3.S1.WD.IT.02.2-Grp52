const routes = require("express").Router();
const CustomerMainRoute = require("./CustomerRoutes");
const StoresMainRoute = require("./StoresRoutes");


routes.use("/customer", CustomerMainRoute);

routes.use("/stores", StoresMainRoute);

module.exports = routes;
