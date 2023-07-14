const express = require("express");
const mongoose = require("mongoose");
// const controlers = require("./controllers/conrollers");
const route = require("./routes/MERN-Router");
const dbModel = require("./models/model-creation.js");
const cors = require("cors");
port = 8000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://osamamagdy0:MERN12345@cluster0.k1qugs2.mongodb.net/todo-MERN"
);

// app.get("/", controlers.getAll);
app.use("/", route);

app.listen(port, () => {
  console.log(`Serveris working http://localhost:${port}`);
});
