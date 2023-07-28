const express = require("express");
const mongoose = require("mongoose");
// const controlers = require("./controllers/conrollers");
const route = require("./routes/MERN-Router");
// const dbModel = require("./models/model-creation.js");
const cors = require("cors");
const jwt = require("jsonwebtoken");

port = 8000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://signin-mern.netlify.app"],
  })
);

mongoose.connect(
  "mongodb+srv://osamamagdy0:MERN12345@cluster0.k1qugs2.mongodb.net/todo-MERN"
);

// app.get("/", controlers.getAll);
app.use("/", route);

//Sign Users
const dbUsersModel = require("./models/model_signin");

app.post("/register", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  const useradd = await dbUsersModel.findOne(user);
  if (useradd) {
    return res.json({ message: "User already exists" });
  } else {
    const newuseradd = new dbUsersModel(user);
    await newuseradd.save();
    return res.json({ meesege: "User has added" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const login = await dbUsersModel.findOne({ username });
  if (!login) {
    return res.json({ messege: "User dose not exists" });
  } else if (password !== login.password) {
    return res.json({ messege: "UserName Or Password is not correct" });
  }

  const token = jwt.sign({ id: login._id }, "Secert");

  return res.json({ token, adminId: login._id });
});

app.listen(port, () => {
  console.log(`Serveris working http://localhost:${port}`);
});
