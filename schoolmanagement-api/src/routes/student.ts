
import { createStudent, getStudent } from "@/controllers/student";
import express from "express";
const studentRouter = express.Router();

studentRouter.post("/students", createStudent);
studentRouter.get("/students", getStudent);
// studentRouter.get("/customers/:id", getCustomerById);
// studentRouter.get("/api/v2/customers", getV2Customers);

export default studentRouter;
