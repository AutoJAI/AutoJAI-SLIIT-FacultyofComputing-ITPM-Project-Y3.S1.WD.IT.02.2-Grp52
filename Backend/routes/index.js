const routes = require("express").Router();
const StoresMainRoute = require("./StoresRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");
const EmpSalMainRoute = require("./EmployeeSalaryRoutes");


routes.use("/stores", StoresMainRoute);
routes.use("/employee", EmployeeMainRoute);
routes.use("/emp_sal", EmpSalMainRoute);

module.exports = routes;
