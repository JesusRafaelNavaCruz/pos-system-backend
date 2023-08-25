"use strict";

const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
    openapi: "3.1.0",
    info: {
      title: "POS-System API",
      version: "0.0.1",      
      description:
        "Sistema de Punto de Venta (POS) para Restaurantes Nuestro sistema de Punto de Venta (POS) para Restaurantes es una solución completa y eficiente diseñada para agilizar la gestión y operación de restaurantes. Desde tomar órdenes y administrar el menú hasta gestionar el flujo de trabajo entre el personal de servicio y cocina, nuestro sistema ofrece herramientas avanzadas para proporcionar una experiencia excepcional tanto para los clientes como para el equipo del restaurante.",
      contact: {
        name: "Jesus Rafael Nava Cruz",
        url: "https://jesusrafaelnavacruz.vercel.app/",
        email: "jrnc9802@gmail.com"
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
  },
  basePath: "/",
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));

module.exports = app;
