const { Router } = require("express");
const { validateModel } = require("../middlewares");
const { getAll, getById, insert } = require("../controllers");

const router = Router();

router.get("/:model", validateModel, getAll);
router.get("/:model/:id", validateModel, getById);
router.post("/:model", validateModel, insert);

module.exports = router;
