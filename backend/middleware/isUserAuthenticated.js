
const jwt = require("jsonwebtoken");

const isUserAuthenticated = (req,res,next)=>{
    const token  = req.headers["authorization"];
    

    // console.log(token,"token")

    if(!token ){
        return res.status(403).json({message:"Access denied. No JWT token provided."})
    }
    
    try{
        const decoded = jwt.verify(token , process.env.JWT_Secret);
        req.user = decoded;
            // console.log(req.user,"auth working");
        next();
    }catch(error){
        return res.status(403).json({message:"Unauthorized Access or expired"})
    }
}

module.exports = {isUserAuthenticated};