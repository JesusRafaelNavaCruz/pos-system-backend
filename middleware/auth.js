const jwt = require("../helpers/jwt");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const payload = jwt.verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalido" });
  }
};
