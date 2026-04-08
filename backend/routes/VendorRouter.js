
const {isProductDataValid, isCategoryDataValid} = require("../middleware/VendorMiddleware.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize.js");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated.js");
const {addProductfunction,ViewAllProducts,UpdateProduct ,DeleteProduct,
    addCategoryfunction,viewCategoryfunction,viewMainCategoryfunction,
    updateMainCategoryfunction,deleteMainCategoryfunction,AddBannerFunc,
    ViewBannerFunc,EditBannerFunc, DeleteBannerFunc} = require("../controller/VendorController.js")
// const {applyattendancefunction,attendancehistoryfunction, applyleavefunction,getLeaveSummary} = require("../controller/EmpController")


const router = require("express").Router();

router.post("/product/category/add",isUserAuthenticated, isUserAuthorize("vendor"), isCategoryDataValid,addCategoryfunction);//category on vendor dashboards
router.get("/main/category/view",isUserAuthenticated, isUserAuthorize("vendor"),viewMainCategoryfunction);//category on vendor dashboards
router.put("/main/category/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),updateMainCategoryfunction);//category on vendor dashboards
router.delete("/main/category/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),deleteMainCategoryfunction);//view category on vendor dashboards
router.get("/product/category/view",isUserAuthenticated, isUserAuthorize("vendor"),viewCategoryfunction);//add product on vendor dashboards
router.post("/product/add",isUserAuthenticated, isUserAuthorize("vendor"), isProductDataValid,addProductfunction);//add product on vend dashboard
router.get("/product/view",isUserAuthenticated, isUserAuthorize("vendor"),ViewAllProducts);//view product
router.put("/product/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),isProductDataValid,UpdateProduct);//update product
router.delete("/product/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),DeleteProduct);//delete product
// Done this point





//





// router.post("/banner/add",isUserAuthenticated, isUserAuthorize("vendor"),AddBannerFunc);
// router.get("/banner/view",isUserAuthenticated, isUserAuthorize("vendor"),ViewBannerFunc);
// router.put("/banner/update/:id",isUserAuthenticated, isUserAuthorize("vendor"),EditBannerFunc);
// router.delete("/banner/delete/:id",isUserAuthenticated, isUserAuthorize("vendor"),DeleteBannerFunc);


// addProductfunction
// router.get("/product/view",isUserAuthenticated, isUserAuthorize("employee"), getProductSummary); 



// router.post("/banner/add",isUserAuthenticated, isUserAuthorize("employee"), applyattendancefunction);
// router.get("/banner/view",isUserAuthenticated, isUserAuthorize("employee"), attendancehistoryfunction);




module.exports = router;