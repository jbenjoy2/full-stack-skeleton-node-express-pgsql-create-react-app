const express = require("express");
const { ExpressError } = require("./expressError");

const app = express();
app.use(express.json());

// PLACEHOLDER- REPLACE WITH BASE ROUTE
app.get("/", (req, res, next) => {
  res.json("hello world");
});
// not found handler
app.use((req, res, next) => {
  const err = new ExpressError("Not found", 404);
  return next(err);
});

// general error handler
app.use((err, req, res, next) => {
  // console.log("node env", process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "test") console.log(err.stack);
  const status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.message,
      status: status,
    },
  });
});
module.exports = app;
