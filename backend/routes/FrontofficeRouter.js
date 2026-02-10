const {viewFrontOfficeProduct, viewFrontOfficeCategory, addClientLead,viewFrontOfficeBanner,
    searchFrontOfficeProducts, ContactFormLead
} = require("../controller/FrontofficeController.js")


const router = require("express").Router();


router.get("/product/view",viewFrontOfficeProduct);
router.get("/product/category/view",viewFrontOfficeCategory);
router.post("/leadform/submit",addClientLead);

router.post("/contactform/submit",ContactFormLead);

router.get("/banner/view",viewFrontOfficeBanner);

router.get("/product/search",searchFrontOfficeProducts);




module.exports = router;