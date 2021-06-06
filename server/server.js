// Include Express JS.
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "redhat",
    database: "users"
  }
});

app.set("db", db);
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
const Users = [];

app.use("/", express.static("../src/App"));
app.get("/", (req, res) => {});

app.post("/login", (req, res) => {
  const { Email, Password } = req.body;
  const MatchedUser = Users.find(
    user => user.Email === Email && user.Password === Password
  );
  if (MatchedUser) {
    req.session.User = MatchedUser;
    res.redirect("/");
  } else {
    res.redirect("/?error=true");
  }
});

app.post("/register", (req, res) => {
  const { Email, Password, FullName } = req.body;
  const db = req.app.get("db");
  db.schema.hasTable("users").then(exists => {
    if (!exists) {
      db.schema
        .createTable("users", table => {
          table.increments("id").primary();
          table.string("name");
          table.string("email");
          table.string("password");
        })
        .then(() => {
          console.log("Table Created");
          res.json("done");
        });
    } else {
      console.log("Table already present");
      res.json("done");
    }
  });
});

// Route Handlers.
// Listen it in a particular port.
app.listen(port, () => {
  console.log(`Server Started in Port ${port}.`);
});
