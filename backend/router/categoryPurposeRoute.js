const express = require ('express');
const router = express.Router();
const controller = require ("../controller/categoryPurpose");

router.post("/categoryPurpose", controller.createCategoryPurpose);
router.get("/allCategoryPurpose", controller.getAllCategoryPurpose);
router.put("/updateCategory/:id", controller.updateCategoryPurpose);
router.delete("/deleteCategory/:id", controller.deleteCategoryPurpose);


module.exports = router;