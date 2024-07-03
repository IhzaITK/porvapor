const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("No token provided!");

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(500).json("Failed to authenticate token.");
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

const verifyUserRole = (requiredRole) => {
  return (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.userRole !== requiredRole) {
        return res.status(403).json("Access denied!");
      }
      next();
    });
  };
};

module.exports = { verifyToken, verifyUserRole };
