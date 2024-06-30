const express = require ("express");
const router = express.Router();
const controller = require ("../controller/userPropertyController");

router.post('/userRegisterProperty', controller.userRegisterProperty);
router.get('/userProperty', controller.getAllUserProperty);
router.get('/singleProperty/:id', controller.singleUserProperty);
router.get("/getRelatedProducts/:id", controller.getRelatedProducts);


module.exports = router;