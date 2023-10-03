const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterById);
router.post("/", validate(middlewares.characterValidation.creation), controllers.createCharacter);
router.patch("/:id", validate(middlewares.characterValidation.edition), controllers.updateCharacter);
router.delete("/:id", controllers.deleteCharacter);

module.exports = router;
