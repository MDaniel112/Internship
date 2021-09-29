module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
    const projects = require("../controllers/project.controller.js");

    var router = require("express").Router();

    router.post("/", employees.create);

    router.get("/", employees.findAll);

    router.get("/employee/:name", employees.findOne);

    router.put("/:id", employees.update);
    
    router.delete("/:id", employees.delete);

    router.post("/projects", projects.create);

    router.get("/projects", projects.findAll);

    router.get("/projects/:project_name", projects.findOne);

    router.put("/projects/:id", projects.update);

    router.delete("/projects/:id", projects.delete);

    router.get("/employee/project/:name", projects.getProject);

    app.use(router);
}