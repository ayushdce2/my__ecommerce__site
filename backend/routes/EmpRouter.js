
const {isProductDataValid, isCategoryDataValid} = require("../middleware/EmployeeMiddleware.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated");
const {addProductfunction,ViewAllProducts,UpdateProduct ,DeleteProduct,addCategoryfunction,viewCategoryfunction} = require("../controller/EmpController.js")
// const {applyattendancefunction,attendancehistoryfunction, applyleavefunction,getLeaveSummary} = require("../controller/EmpController")


const router = require("express").Router();

router.post("/product/add",isUserAuthenticated, isUserAuthorize("employee"), isProductDataValid,addProductfunction);
router.get("/product/view",isUserAuthenticated, isUserAuthorize("employee"),ViewAllProducts);
router.put("/product/update/:id",isUserAuthenticated, isUserAuthorize("employee"),isProductDataValid,UpdateProduct);
router.delete("/product/delete/:id",isUserAuthenticated, isUserAuthorize("employee"),DeleteProduct);

// 

router.post("/product/category/add",isUserAuthenticated, isUserAuthorize("employee"), isCategoryDataValid,addCategoryfunction);
router.get("/product/category/view",isUserAuthenticated, isUserAuthorize("employee"),viewCategoryfunction);

// addProductfunction
// router.get("/product/view",isUserAuthenticated, isUserAuthorize("employee"), getProductSummary); 



// router.post("/banner/add",isUserAuthenticated, isUserAuthorize("employee"), applyattendancefunction);
// router.get("/banner/view",isUserAuthenticated, isUserAuthorize("employee"), attendancehistoryfunction);




module.exports = router;