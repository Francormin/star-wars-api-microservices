const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterById);
router.post("/", validate(middlewares.characterValidation), controllers.createCharacter);

module.exports = router;
