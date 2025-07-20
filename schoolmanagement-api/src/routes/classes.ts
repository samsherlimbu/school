import { createClass, createSection, getBriefClasses, getClasses, getSection } from "@/controllers/classes";
import { createSchool, getSchools } from "@/controllers/schools";
import express from "express";
const classRouter = express.Router();

classRouter.post("/classes", createClass);
classRouter.get("/classes", getClasses);
classRouter.get("/classes/brief", getBriefClasses);
classRouter.post("/sections", createSection);
classRouter.get("/sections", getSection);
// schoolRouter.get("/customers/:id", getCustomerById);
// schoolRouter.get("/api/v2/customers", getV2Customers);

export default classRouter;
