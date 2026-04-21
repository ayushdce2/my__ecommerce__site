const {SignupFunction,LoginFunction,ProfileFunction, LogOutFunction,updateUserProfile} = require("../controller/AuthController.js");

const {signupValidation,loginValidation} = require("../middleware/AuthValidation.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");

const router = require("express").Router();

router.post("/login", loginValidation, LoginFunction);
router.post("/signup", signupValidation, SignupFunction);
router.post("/logout", LogOutFunction);
router.get("/profile",isUserAuthenticated, ProfileFunction);
router.put("/update_profile/:id",isUserAuthenticated, updateUserProfile);

module.exports = router;