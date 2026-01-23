const {viewFrontOfficeProduct, viewFrontOfficeCategory, addClientLead} = require("../controller/FrontofficeController.js")


const router = require("express").Router();


router.get("/product/view",viewFrontOfficeProduct);
router.get("/product/category/view",viewFrontOfficeCategory);
router.post("/leadform/submit",addClientLead);




module.exports = router;