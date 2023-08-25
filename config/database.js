const mongoose = require("mongoose");
const config = require("./config");

const dbURI = config.databaseUrl;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Conexión exitosa a la base de datos");
});

mongoose.connection.on("error", (err) => {
  console.error("Error en la conexión a la base de datos:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Conexión a la base de datos cerrada");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Conexión a la base de datos cerrada debido a la terminación de la aplicación"
    );
    process.exit(0);
  });
});
