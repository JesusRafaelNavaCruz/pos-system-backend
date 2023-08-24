module.exports = {
  success: (res, data) => {
    res.status(200).json({ success: true, data });
  },
  error: (res, message, statusCode = 500) => {
    res.status(statusCode).json({ success: false, error: message });
  },
  notFound: (res, message = "Recurso no encontrado") => {
    res.status(404).json({ success: false, error: message });
  },
};
