import express from "express";
import UsersController from "../controllers/usersController.js";

const router = express.Router();

router.post("/register", UsersController.CreateUserProfile);

router.get("/users", UsersController.GetUsers);
router.get("/users/:id", UsersController.GetUserById);
router.put("/users/:id", UsersController.UpdateUserById);
router.delete("/users/:id", UsersController.DeleteUserById);

router.get("/users/role/:roleId", UsersController.getUsersByRoleId);

export default router;
