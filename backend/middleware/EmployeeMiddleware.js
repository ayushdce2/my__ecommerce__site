const Joi = require("joi");

const isProductDataValid = (req, res, next) => {
  console.log(req.body, "req.body validData");
  const { pname, pprice, categoryID, pstock, pdescription, pimage } = req.body;
  // console.log(pimage,"valid pimage","pcategory",pcategory)

  const schema = Joi.object({
    pname: Joi.string().trim().min(1).required(),
    pprice: Joi.number().positive().precision(2).required(),
    categoryID: Joi.string().trim().required(),
    pstock: Joi.number().integer().min(0).required(),
    pdescription: Joi.string().trim().min(1).required(),
            
  });

  const { error, value } = schema.validate({pname,pprice, categoryID, pstock, pdescription}, {
  abortEarly: false,
});

  if (error) {
    return res.status(400).json({ message: "Validation error", error });
  }
  // console.log("working in validation")
  next();
};



const isCategoryDataValid = (req, res, next) => {
  console.log(req.body, "req.body validData");
  const { categoryName, description,catPriority } = req.body;
  // console.log(pimage,"valid pimage")

  const schema = Joi.object({
    categoryName: Joi.string().trim().min(1).required(),
    // description: Joi.string().trim().min(1).required(),
    catPriority: Joi.number().required(),

            
  });

  const { error, value } = schema.validate({categoryName,catPriority}, {
  abortEarly: false,
});

  if (error) {
    return res.status(400).json({ message: "Validation error", error });
  }
  // console.log("working in validation")
  next();
};

module.exports = {
  isProductDataValid,isCategoryDataValid
};
