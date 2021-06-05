// Include Express JS.
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(fileUpload());

app.get("/", function (req, res) {
  res.json("Hello BACKEND!!!");
});

// Route Handlers.
// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
