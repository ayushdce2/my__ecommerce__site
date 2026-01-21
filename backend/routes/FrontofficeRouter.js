const {viewFrontOfficeProduct, viewFrontOfficeCategory} = require("../controller/FrontofficeController.js")


const router = require("express").Router();


router.get("/product/view",viewFrontOfficeProduct);
router.get("/product/category/view",viewFrontOfficeCategory);





module.exports = router;