const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./models")
db.sequelize.sync();

require("./routes/employee.routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server-ul ruleaza pe portul: 3000");
  })