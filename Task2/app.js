const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const passport = require("passport");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(passport.initialize());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = require("./models");
// const passport = require("./config/passport");
db.sequelize.sync();

require("./routes/employee.routes")(app);
require("./routes/auth.routes")(app);

require("./config/passport")(passport);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log("Server-ul ruleaza pe portul: " + PORT);
  })