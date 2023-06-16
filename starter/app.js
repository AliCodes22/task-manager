const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// router
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: 200,
    data: "hello",
  });
});

app.use("/api/v1/tasks", tasks);

app.listen(3000, () => {
  console.log("server's on!");
});
