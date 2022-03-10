const controller = require("../controller/controller");

const routes = require("express").Router();

routes.route("/api/categories").get(controller.createCategories);

module.exports = routes;
