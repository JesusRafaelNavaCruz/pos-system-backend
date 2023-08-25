const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  generateToken: (user) => {
    const secretKey = config.secretKey;
    const token = jwt.sign({user}, secretKey, { expiresIn: "3d" });
    return token;
  },
  verifyToken: (token) => {
    const secretKey = config.secretKey;
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (err) {
      throw err; // Manejo de errores personalizado
    }
  },
};
