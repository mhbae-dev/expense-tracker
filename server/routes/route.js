const controller = require("../controller/controller");

const routes = require("express").Router();

routes
  .route("/api/categories")
  .post(controller.createCategories)
  .get(controller.getCategories);

module.exports = routes;
