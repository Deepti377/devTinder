const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth");

// generally we use app.use() for middlewares so we can use it for get/post/delete etc

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("Hello from admin get data");
});
app.get("/admin/deleteUser", (req, res) => {
  // we need to authorizr
  res.send("Delete from admin");
});
app.listen(7777, () => {
  console.log("Server is successfully running");
});
