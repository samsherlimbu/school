import { createContacts, getContacts } from "@/controllers/admin";
import { createUsers, getUsers, loginUser } from "@/controllers/users";
import express from "express";
const userRouter = express.Router();

userRouter.post("/register", createUsers);
userRouter.post("/login", loginUser);
userRouter.get("/users", getUsers);
// userRouter.get("/api/v2/customers", getV2Customers);

export default userRouter;
