const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");

// authenticating user
const isAuthenticatedUser = catchAsyncError( async (req,res,next)=>{

    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to access this service", 401))
    }

    const decodeData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodeData.id)

    next();
})


// authenticating admin account
const authorizeRoles = (...roles) =>{

    return (req,res,next)=>{
        
        if(!roles.includes(req.user.role)){
            return next (
                new ErrorHandler(`role:${req.user.role} dont have permission to acces this service`,403)
            )
        }

        next();
    }
      
}

module.exports = {isAuthenticatedUser, authorizeRoles}