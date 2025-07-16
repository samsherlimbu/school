import express from "express";
import schoolRouter from "./routes/school";
import adminRouter from "./routes/admin";
import classRouter from "./routes/classes";
import parentRouter from "./routes/parent";
import studentRouter from "./routes/student";
import departmentRouter from "./routes/departments";
import subjectRouter from "./routes/subjects";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(schoolRouter);
app.use(adminRouter);
app.use(classRouter);
app.use(parentRouter);
app.use(studentRouter)
app.use(departmentRouter);
app.use(subjectRouter)

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log a message indicating the server is running
});


