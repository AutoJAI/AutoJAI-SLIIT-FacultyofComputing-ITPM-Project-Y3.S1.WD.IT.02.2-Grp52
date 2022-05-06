const routes = require("express").Router();
const StoresMainRoute = require("./StoresRoutes");


routes.use("/stores", StoresMainRoute);

module.exports = routes;
