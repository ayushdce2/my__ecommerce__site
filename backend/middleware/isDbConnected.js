const isDbConnected = (req,res,next)=>{
    // console.log(req.app.locals.dbError,"req.app.locals.dbError")
    if (req.app.locals.dbError) {
    return res.status(500).json({message:req.app.locals.dbError.message});
  }
  next();
}
  module.exports = {isDbConnected};