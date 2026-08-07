const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    firstName: "Deepti",
    lastName: "Chauhan",
  });
});

app.post("/user", (req, res) => {
  console.log("Save Data to database");
  res.send("Data Successfully saved to database");
});
app.delete("/user", (req, res) => {
  res.send("Deleted Successfully ");
});
app.use("/test", (req, res) => {
  res.send("Hello from the server !!!");
});

app.listen(7777, () => {
  console.log("Server is successfully running");
});
