const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/api", index);
// To maintain backward compatibility
app.use("/", index);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  console.log("error handler called...");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
  // res.sendStatus(500);
});

exports.app = functions.https.onRequest(app);
