const express = require ("express");
const router = express.Router();
const controller = require ("../controller/fileUploadController");



router.post("/uploadImg", controller.imageUpload);
router.get("/getAllData", controller.getAllData);
router.get("/getSingleData/:id", controller.getSingleData);



module.exports = router;