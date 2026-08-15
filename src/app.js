const express = require("express");

const app = express();

// Problem why we need the middleware?? beacuse if there are 100 such api then we need to make a generic function which can work for all
app.get("/admin/getAllData", (req, res) => {
  // we need to authorizr but just image writing the below ogic for 100 apis in the same way uff!!!!!
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("Hello from admin");
  } else {
    res.status(401).send("Unauthorized request");
  }
});
app.get("/admin/delete", (req, res) => {
  // we need to authorizr
  res.send("Delete from admin");
});
app.listen(7777, () => {
  console.log("Server is successfully running");
});
