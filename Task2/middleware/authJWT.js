const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).send({
            message:"Nu a fost oferit nici un token!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.send.status(401).send({
                message: "Neatorizat"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;