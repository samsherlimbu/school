import { createParent, getParent } from "@/controllers/parent";
import { createSchool, getSchools } from "@/controllers/schools";
import { createTeacher, getTeacher } from "@/controllers/teachers";
import express from "express";
const teacherRouter = express.Router();

teacherRouter.post("/teachers", createTeacher);
teacherRouter.get("/teachers", getTeacher);
// teacherRouter.get("/customers/:id", getCustomerById);
// teacherRouter.get("/api/v2/customers", getV2Customers);

export default teacherRouter;
