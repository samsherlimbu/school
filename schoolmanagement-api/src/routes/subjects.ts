import { createClass, createSection, getClasses, getSection } from "@/controllers/classes";
import { createDepartment, getBriefDepartments, getDepartments } from "@/controllers/departments";
import { createSchool, getSchools } from "@/controllers/schools";
import { createSubject, getBriefSubjects, getSubjects } from "@/controllers/subjects";
import express from "express";
const subjectRouter = express.Router();

subjectRouter.post("/subjects", createSubject);
subjectRouter.get("/subjects", getSubjects);
subjectRouter.get("/subjects/brief", getBriefSubjects);

// schoolRouter.get("/customers/:id", getCustomerById);
// schoolRouter.get("/api/v2/customers", getV2Customers);

export default subjectRouter;
