const express = require("express")
const router = express.Router()
const controller = require("./controller")
router.get("/", controller.getAll)
  
  router.post("/", controller.post);
  router.delete("/:id", controller.deleteOne)
  router.delete("/", controller.deleteAll)

  module.exports = router