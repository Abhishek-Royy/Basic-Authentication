const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataModel = require("./models/collect");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/collectData");

app.post("/register", (req, res) => {
  dataModel
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  dataModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Successfully login..!");
        
      } else {
        res.json("The password is incorrect.!!");
      }
    } else {
      res.json("No any Record exist !!");
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Connect Succenssfull http://localhost:${PORT}`);
});
