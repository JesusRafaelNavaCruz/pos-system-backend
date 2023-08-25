const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();


//Express config
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Database connection
require("./config/database");

//Routes
const usersRoutes = require("./routes/usersRoutes");
const customerRoutes = require("./routes/customerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/users", usersRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/category", categoryRoutes);


//Manejo de errores
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);


// Start Server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
