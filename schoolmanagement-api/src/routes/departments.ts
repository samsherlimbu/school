import { createClass, createSection, getClasses, getSection } from "@/controllers/classes";
import { createDepartment, getBriefDepartments, getDepartments } from "@/controllers/departments";
import { createSchool, getSchools } from "@/controllers/schools";
import express from "express";
const departmentRouter = express.Router();

departmentRouter.post("/departments", createDepartment);
departmentRouter.get("/departments", getDepartments);
departmentRouter.get("/departments/brief", getBriefDepartments);

// schoolRouter.get("/customers/:id", getCustomerById);
// schoolRouter.get("/api/v2/customers", getV2Customers);

export default departmentRouter;
