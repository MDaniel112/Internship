module.exports = app => {
    const employees = require("../controllers/employee.controller.js");

    var router = require("express").Router();

    router.post("/", employees.create);

    router.get("/", employees.findAll);

    router.get("/:name", employees.findOne);

    router.put("/:id", employees.update);
    
    router.delete("/:id", employees.delete);

    app.use(router);
}