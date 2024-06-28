const express = require ("express");
const router = express.Router();
const controller = require ("../controller/userPropertyController");

router.post('/userRegisterProperty', controller.userRegisterProperty);

module.exports = router;