const isUserAuthorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};


module.exports = {isUserAuthorize};