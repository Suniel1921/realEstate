const express = require ('express');
const router = express.Router();
const controller = require ("../controller/categoryController");

router.post("/createCategory", controller.createCategory);
router.get("/allCategory", controller.getAllCategory);
router.put("/updateCategory/:id", controller.updateCategory);
router.delete("/deleteCategory/:id", controller.deleteCategory)

module.exports = router;
