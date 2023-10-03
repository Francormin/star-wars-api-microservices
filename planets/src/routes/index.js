const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);
router.post("/", validate(middlewares.planetValidation.creation), controllers.createPlanet);
router.patch("/:id", validate(middlewares.planetValidation.edition), controllers.updatePlanet);
router.delete("/:id", controllers.deletePlanet);

module.exports = router;
