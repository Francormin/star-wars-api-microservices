const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);
router.post("/", validate(middlewares.planetValidation), controllers.createPlanet);

module.exports = router;
