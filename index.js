const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Bank = require("./src/models/bank.js");
require("./src/db/mongoose.js");
app.use(express.json());
//CRUD Operations.

// Creating a bank account user.
app.post("/bank", async (req, res) => {
  const user = new Bank(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

// Reading/Getting information about an user
// Getting all the users

app.get("/bank", async (req, res) => {
  try {
    const users = await Bank.find({});
    res.status(200).send(users);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

app.get("/bank/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Bank.findById(id);
    res.status(200).send(user);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

// Updating User information
app.patch("/bank/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Bank.findByIdAndUpdate(id, req.body);
    res.status(200).send(user);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

// Deleting an user
app.delete("/bank/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Bank.findByIdAndDelete(id);
    res.status(200).send(user);
  } catch (Error) {
    res.status(400).send(Error);
  }
});

app.listen(port, () => {
  console.log("Server is up and running on port" + port);
});
