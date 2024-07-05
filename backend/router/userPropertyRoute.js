const express = require ("express");
const router = express.Router();
const controller = require ("../controller/userPropertyController");

router.post('/userRegisterProperty', controller.userRegisterProperty);
router.get('/userProperty', controller.getAllUserProperty);
router.get('/singleProperty/:id', controller.singleUserProperty);
router.get("/getRelatedProducts/:id", controller.getRelatedProducts);
router.delete("/deleteProperty/:id", controller.deleteProperty);
router.put("/updateProperty/:id", controller.updateProperty);


module.exports = router;