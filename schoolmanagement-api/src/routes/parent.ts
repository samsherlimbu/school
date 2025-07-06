import { createParent, getParent } from "@/controllers/parent";
import { createSchool, getSchools } from "@/controllers/schools";
import express from "express";
const parentRouter = express.Router();

parentRouter.post("/parents", createParent);
parentRouter.get("/parents", getParent);
// parentRouter.get("/customers/:id", getCustomerById);
// parentRouter.get("/api/v2/customers", getV2Customers);

export default parentRouter;
