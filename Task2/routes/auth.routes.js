const {verifySignUp} = require("../middleware");


module.exports = function(app) {
    const users = require("../controllers/auth.controller");

    var router = require("express").Router();

    router.post("/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail], users.signup);

    router.post("/auth/signin", users.signin);

    app.use(router);
}