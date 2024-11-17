const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// dot env config
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// port
const port = process.env.PORT || 8080;

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
  //   res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
