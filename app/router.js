const express = require("express");
const controller = require("./controller");
const routes = express.Router();

routes.route("/search-all").get(controller.search);

module.exports = routes;