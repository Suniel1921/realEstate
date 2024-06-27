const express = require ("express");
const router = express.Router();
const controller = require ("../controller/fileUploadController");


router.post("/uploadImg", controller.imageUpload);
router.get("/getAllData", controller.getAllData);
router.get("/getSingleData/:id", controller.getSingleData);
router.put("/updateProperty/:id", controller.updateProperty);
router.delete("/deleteProperty/:id", controller.deleteProperty);

router.get("/totalFlat", controller.totalFlat);
router.get("/totalLand", controller.totalLand);
router.get("/getRelatedProducts/:id", controller.getRelatedProducts);




module.exports = router;