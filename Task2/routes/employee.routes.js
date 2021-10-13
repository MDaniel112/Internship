module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
    const projects = require("../controllers/project.controller.js");
    const authJwt = require("../middleware/authJWT");

    var router = require("express").Router();

    router.post("/", [authJwt.verifyToken] , employees.create);

    router.get("/", [authJwt.verifyToken] ,employees.findAll);

    router.get("/employee/:name", employees.findOne);

    router.put("/:id", [authJwt.verifyToken] , employees.update);
    
    router.delete("/:id", [authJwt.verifyToken] ,employees.delete);

    router.post("/projects", [authJwt.verifyToken] , projects.create);

    router.get("/projects", [authJwt.verifyToken] , projects.findAll);

    router.get("/projects/:project_name", [authJwt.verifyToken] , projects.findOne);

    router.put("/projects/:id", [authJwt.verifyToken] , projects.update);

    router.delete("/projects/:id", [authJwt.verifyToken] , projects.delete);

    router.get("/employee/project/:name", [authJwt.verifyToken] , projects.getProject);

    app.use(router);
}