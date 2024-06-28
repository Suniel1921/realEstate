const express = require ("express");
const router = express.Router();
const controller = require ("../controller/userPropertyController");

router.post('/userRegisterProperty', controller.userRegisterProperty);
router.get('/userProperty', controller.getAllUserProperty);

module.exports = router;