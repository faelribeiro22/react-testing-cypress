const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const courses = require("./courses.json");

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(cors());

const users = [];

const getUserProps = user => ({
  name: user.name,
  login: user.login
});

app.post("/signup", (req, res) => {
  const { user } = req.body;

  users.push(user);

  res.json(getUserProps(user));
});

app.post("/signin", (req, res) => {
  const { login, password } = req.body.user;

  const currentUser = users.find(
    user => user.login === login && user.password === password
  );

  if (currentUser) {
    res.json(getUserProps(currentUser));
  } else {
    res.status(401).json({ message: "Access denied" });
  }
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const course = courses.find(c => c.id === id);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
