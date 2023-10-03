const { Router } = require("express");
const { validateModel } = require("../middlewares");
const { getAll, getById, insert, update, remove } = require("../controllers");

const router = Router();

router.get("/:model", validateModel, getAll);
router.get("/:model/:id", validateModel, getById);
router.post("/:model", validateModel, insert);
router.patch("/:model/:id", validateModel, update);
router.delete("/:model/:id", validateModel, remove);

module.exports = router;
