module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
    const projects = require("../controllers/project.controller.js");
    const authJwt = require("../middleware/authJWT");

    var router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin] , employees.create);

    router.get("/", [authJwt.verifyToken] ,employees.findAll);

    router.get("/employee/:name",[authJwt.verifyToken], employees.findOne);

    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin] , employees.update);
    
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin] ,employees.delete);

    router.post("/projects", [authJwt.verifyToken, authJwt.isAdmin] , projects.create);

    router.get("/projects", [authJwt.verifyToken] , projects.findAll);

    router.get("/projects/:project_name", [authJwt.verifyToken] , projects.findOne);

    router.put("/projects/:id", [authJwt.verifyToken, authJwt.isAdmin] , projects.update);

    router.delete("/projects/:id", [authJwt.verifyToken, authJwt.isAdmin] , projects.delete);

    router.get("/employee/project/:name", [authJwt.verifyToken] , projects.getProject);

    router.get("/allEmpProjects",[authJwt.verifyToken] , projects.getAllProjects);

    app.use(router);
}