import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (isVerified) {
      req.id = isVerified.userId;
      next();
      
    } else {
      res.status(401).json({
        message: " Invalid token",
        success: false,
      });
    }
  } catch (e) {
    console.log(`Error while authenticated :: Middleware:: ${e}`)
  }
};
export default isAuthenticated