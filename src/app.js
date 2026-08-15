const express = require("express");

const app = express();

// case 1 sending response from 1st route handler
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("Handling use route");
//     res.send("Response 1");
//   },
//   (req, res) => {
//     console.log("Handling user route 2");
//     res.send("Response 2");
//   }
// );

// // Case 2 not sending response from 1st route hander
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("Handling use route");
//   },
//   (req, res) => {
//     console.log("Handling user route 2");
//     res.send("Response 2");
//   }
// );

// Case 3 not sending response from 1st route hander but added next()
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling use route");
    next();
  },
  (req, res) => {
    console.log("Handling user route 2");
    res.send("Response 2");
  }
);
app.listen(7777, () => {
  console.log("Server is successfully running");
});
