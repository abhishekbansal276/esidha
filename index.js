const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/contact', (req, res) => {
  res.render("contact");
});

app.get('/pricing', (req, res) => {
  res.render("pricing");
});

app.get('/services', (req, res) => {
  res.render("services");
});

app.get('/why-us', (req, res) => {
  res.render("why_us");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
