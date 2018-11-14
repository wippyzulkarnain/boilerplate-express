const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAll);
router.post("/login",controller.login)
router.post("/", controller.post);
router.delete("/:id", controller.deleteOne);
router.delete("/", controller.deleteAll);
router.get("/search", controller.search);
router.put("/:id", controller.update);

module.exports = router;
