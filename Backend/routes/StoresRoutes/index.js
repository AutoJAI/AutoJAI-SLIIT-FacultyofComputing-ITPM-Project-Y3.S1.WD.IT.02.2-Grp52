const routes = require("express").Router();
const StoresRoutes = require("../../controller/stores");
const upload = require("../../utils/multer");

routes.post("/add-stores-details",  upload.single("image"), StoresRoutes.addStoresScheduleDetails);

routes.get("/get-all-stores-details", StoresRoutes.getAllStoresDetails);

routes.get("/get-stores-details/:id", StoresRoutes.getStoresDetailsById);

routes.put("/update-schedule-details/:id", upload.single("image"), StoresRoutes.updateStoresDetails);

routes.delete("/delete-schedule/:id", StoresRoutes.deleteStores);

module.exports = routes;
