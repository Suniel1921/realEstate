// Router
const express = require("express");
const router = express.Router();
const controller = require("../controller/authController");
const { requireLogin, isAdmin } = require("../middleware/authMiddleware");

router.post("/register", controller.register);
router.post("/login", controller.login);

router.get('/protectedRoute', requireLogin, controller.protectedRoute);
router.get('/admin', requireLogin, isAdmin, controller.admin);
router.get('/userCount', requireLogin, isAdmin, controller.userCount);

module.exports = router;