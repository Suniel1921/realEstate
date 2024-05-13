const JWT  = require ("jsonwebtoken");
const authModel = require ('../model/authModel');

//protected route
exports.requireLogin = (req, res, next)=>{
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({ success: false, message: "Unauthorized: Missing token" });
    }

    try {
        const decode = JWT.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        console.error("Error decoding token:", error);
        return res.status(401).send({ success: false, message: "Unauthorized: Invalid token or missing 'Bearer' prefix" });
    }   
}



//admin route
exports.isAdmin = async (req, res, next)=>{
    try {
        const user = await authModel.findById(req.user._id);
        if(!user || user.role !== 1){
            return res.status(403).json({success: false, message : 'You dont have permission to access this route'})
        }
        next();
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });   
    }
}

