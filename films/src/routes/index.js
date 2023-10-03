const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmById);
router.post("/", validate(middlewares.filmValidation.creation), controllers.createFilm);
router.patch("/:id", validate(middlewares.filmValidation.edition), controllers.updateFilm);
router.delete("/:id", controllers.deleteFilm);

module.exports = router;
