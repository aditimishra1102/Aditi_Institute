const express = require("express");
const app=express();

const cors=require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

const course=require("./routes/CourseRoute")
app.use("/api/v1",course);

const connectwithDb = require("./config/database");
connectwithDb();

app.listen(PORT, () => {
    console.log(`App started at port no ${PORT}`);
});


app.get("/", (req,res) => {
    res.send(`<h1>This is the Homepage!!</h1>`)
    console.log("working");
});