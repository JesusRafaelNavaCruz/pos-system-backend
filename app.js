const express = require("express");
const bodyParser = require("body-parser");
const cors = require("./middleware/cors");
require('dotenv').config();


//Express config
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors);
app.use(bodyParser.json());

//Database connection
require("./config/database");

//Routes
const apiDocs = require("./routes/api-docs");
const usersRoutes = require("./routes/usersRoutes");
const customerRoutes = require("./routes/customerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const menuRoutes = require("./routes/menuRoutes");
const menuItemRoute = require("./routes/menuItemRoutes");


app.use("/api-docs", apiDocs);
app.use("/api/users", usersRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/menu-item", menuItemRoute);


//Manejo de errores
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);


// Start Server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
