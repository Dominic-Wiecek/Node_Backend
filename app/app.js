const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("../router/userRouter.js");
const { connect } = require("../db/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//ROUTERS
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "IS UP" });
});

app.use("/users", userRouter);

//ERRORS
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

connect();
module.exports = app;
