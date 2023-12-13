const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes');

const middleware = (req, res, next) => {
  console.log('middleware is called');
  next();
};

app.use('/todolistapi', routes);

app.get("/", middleware, (req, res) => {
  res.send("Hello, Express!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
