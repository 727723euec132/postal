// Role-based authorization middleware to restrict access by user role.
export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden." });
  }
  return next();
};
