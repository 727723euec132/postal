// JWT authentication middleware for securing API routes.
import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Missing authorization header." });
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "postal-secret");
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
