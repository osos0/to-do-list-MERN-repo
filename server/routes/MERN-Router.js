const express = require("express");
const conrollers = require("../controllers/conrollers");
const dbModel = require("../models/model-creation");

const route = express.Router();

route.get("/", conrollers.getStrat);
route.get("/allproducts", conrollers.getAll);
route.get("/allproducts/:id", conrollers.getAOne);
route.post("/allproducts", conrollers.PostObj);
// route.put("/allproducts/:id", conrollers.editObj);
route.delete("/allproducts/:id", conrollers.deleteobj);

module.exports = route;
