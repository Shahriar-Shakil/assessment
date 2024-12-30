import express from "express";
import * as UsersController from "../controllers/usersController.js";

const router = express.Router();

router.post("/register", UsersController.CreateUserProfile);

export default router;
