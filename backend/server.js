const express = require("express");
const app = express();
require("dotenv").config();

const { MongooseDBConnectionFunction } = require("./models/db.js");
MongooseDBConnectionFunction(app); //to check if db is connected
const cors = require("cors");


app.use(cors());
app.use(express.json()); 

const { isDbConnected } = require("./middleware/isDbConnected.js");
app.use(isDbConnected);//to check if db is connected

const AuthRouter = require("./routes/AuthRouter.js");
app.use("/api/auth",AuthRouter);
const EmpRouter = require("./routes/EmpRouter.js");
app.use("/api/employee",EmpRouter);
// const AdminRouter = require("./routes/AdminRouter.js");
// app.use("/api/admin",AdminRouter);
const HrRouter = require("./routes/HrRouter.js");
app.use("/api/hr",HrRouter);

app.get("/api/",(req,res)=>{
    console.log("hi");
    res.send("Hello World");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`)
})