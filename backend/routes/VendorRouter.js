
const {isProductDataValid, isCategoryDataValid} = require("../middleware/VendorMiddleware.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");
const {addProductfunction,ViewAllProducts,UpdateProduct ,DeleteProduct,
    addCategoryfunction,viewCategoryfunction,viewMainCategoryfunction,
    updateMainCategoryfunction,deleteMainCategoryfunction,AddBannerFunc,
    ViewBannerFunc,EditBannerFunc, DeleteBannerFunc} = require("../controller/VendorController.js")
// const {applyattendancefunction,attendancehistoryfunction, applyleavefunction,getLeaveSummary} = require("../controller/EmpController")


const router = require("express").Router();

router.post("/product/category/add",isUserAuthenticated, isUserAuthorize("vendor"), isCategoryDataValid,addCategoryfunction);

// Done this point



router.post("/product/add",isUserAuthenticated, isUserAuthorize("vendor"), isProductDataValid,addProductfunction);
router.get("/product/view",isUserAuthenticated, isUserAuthorize("vendor"),ViewAllProducts);
router.put("/product/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),isProductDataValid,UpdateProduct);
router.delete("/product/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),DeleteProduct);

//


router.get("/product/category/view",isUserAuthenticated, isUserAuthorize("vendor"),viewCategoryfunction);
router.get("/main/category/view",isUserAuthenticated, isUserAuthorize("vendor"),viewMainCategoryfunction);
router.put("/main/category/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),updateMainCategoryfunction);
router.delete("/main/category/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),deleteMainCategoryfunction);

router.post("/banner/add",isUserAuthenticated, isUserAuthorize("vendor"),AddBannerFunc);
router.get("/banner/view",isUserAuthenticated, isUserAuthorize("vendor"),ViewBannerFunc);
router.put("/banner/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),EditBannerFunc);
router.delete("/banner/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),DeleteBannerFunc);


// addProductfunction
// router.get("/product/view",isUserAuthenticated, isUserAuthorize("employee"), getProductSummary); 



// router.post("/banner/add",isUserAuthenticated, isUserAuthorize("employee"), applyattendancefunction);
// router.get("/banner/view",isUserAuthenticated, isUserAuthorize("employee"), attendancehistoryfunction);




module.exports = router;