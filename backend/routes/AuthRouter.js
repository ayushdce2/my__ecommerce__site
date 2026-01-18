const {SignupFunction,LoginFunction,ProfileFunction, LogOutFunction} = require("../controller/AuthController.js");

const {signupValidation,loginValidation} = require("../middleware/AuthValidation.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");

const router = require("express").Router();

router.post("/login", loginValidation, LoginFunction);
router.post("/signup", signupValidation, SignupFunction);
router.post("/logout", LogOutFunction);
router.get("/profile",isUserAuthenticated, ProfileFunction);


module.exports = router;