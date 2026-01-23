const {viewFrontOfficeProduct, viewFrontOfficeCategory, addClientLead,viewFrontOfficeBanner} = require("../controller/FrontofficeController.js")


const router = require("express").Router();


router.get("/product/view",viewFrontOfficeProduct);
router.get("/product/category/view",viewFrontOfficeCategory);
router.post("/leadform/submit",addClientLead);

router.get("/banner/view",viewFrontOfficeBanner);




module.exports = router;