const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const { validate } = require("express-validation");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmById);
router.post("/", validate(middlewares.filmValidation), controllers.createFilm);

module.exports = router;
