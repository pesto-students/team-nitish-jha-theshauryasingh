const authController = require("../controller/authController.js")

const router = require("express").Router();

router.get("/login", authController.getlogin)
router.post("/login", authController.postlogin)
router.get("/signup", authController.getsignup)
router.post("/signup", authController.postsignup)

module.exports = router;