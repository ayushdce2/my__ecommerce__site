const {getAllUsers, updateusers, getCustomerLeads} = require("../controller/AdminController.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");
const {isUserAuthorize} = require("../middleware/isUserAuthorize.js");

const router = require("express").Router();

router.get("/viewallusers",isUserAuthenticated, isUserAuthorize("admin"), getAllUsers); 
router.put("/updateusers",isUserAuthenticated, isUserAuthorize("admin"), updateusers);
router.get("/customer/leads",isUserAuthenticated, isUserAuthorize("admin"), getCustomerLeads); 

module.exports = router;