const {viewFrontOfficeProduct, viewFrontOfficeCategory, addClientLead,viewFrontOfficeBanner,
    searchFrontOfficeProducts
} = require("../controller/FrontofficeController.js")


const router = require("express").Router();


router.get("/product/view",viewFrontOfficeProduct);
router.get("/product/category/view",viewFrontOfficeCategory);
router.post("/leadform/submit",addClientLead);

router.get("/banner/view",viewFrontOfficeBanner);

router.get("/product/search",searchFrontOfficeProducts);




module.exports = router;