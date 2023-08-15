module.exports = function (err, req, res, next) {
  console.error(err.stack);

  const statusCode = err.status || 500;
  const message = err.message || "Hubo un error en el servidor";

  res.status(statusCode).json({ error: message });
};
