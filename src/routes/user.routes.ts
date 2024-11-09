import express from "express";
import usersController from "../controller/users.controller";

const router = express.Router()

router.post("/create-user",usersController.createUserController)
router.post("/get-user",usersController.getUsers)

export default router