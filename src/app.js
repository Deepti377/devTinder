const express = require("express");
require("./config/database");
const app = express();
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Nidhi",
    lastName: "Nidhi",
    emailId: "nidhi@123.com",
    password: "nidhi@123",
  });

  //   Creating a new instance of the User model
  // const user = new User(req.body);

  try {
    // Data will be saved to our database using save method
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
