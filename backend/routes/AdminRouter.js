const {getAllUsers, updateusers} = require("../controller/AdminController.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");
const {isUserAuthorize} = require("../middleware/isUserAuthorize.js");

const router = require("express").Router();

router.get("/viewallusers",isUserAuthenticated, isUserAuthorize("admin"), getAllUsers); 
router.put("/updateusers",isUserAuthenticated, isUserAuthorize("admin"), updateusers);


module.exports = router;