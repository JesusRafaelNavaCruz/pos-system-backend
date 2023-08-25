const express = require("express");
const userController = require('../controller/userController');
const auth = require('../middleware/auth');

const api = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - firstLasName
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of user
 *         firstLasName:
 *           type: string
 *           description: The lastname of user
 *         secondLastName:
 *           type: string
 *           description: The second lastname of user
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *         role:
 *           type: string
 *           description: The role of user
 *         status:
 *           type: string
 *           description: The status of user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *       example:
 *         id: 1
 *         name: John
 *         firstLastName: Doe
 *         secondLastName: Red
 *         email: example@mail.com
 *         password: admin123
 *         role: ADMIN
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Recurso no encontrado
 *
 */
api.get("/", auth, userController.getAllUsers);
api.post("/", userController.addUser);
api.put("/:id", auth, userController.updateUser);
api.get("/:id", auth, userController.findUserById);
api.delete("/:id", auth, userController.deleteUser);
api.post("/signin", userController.signin)

module.exports = api;