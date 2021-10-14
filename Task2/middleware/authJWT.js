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
            return res.status(401).send({
                message: "Neatorizat"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

isAdmin = (req, res, next) => {
    User.findByPk(req.userId)
        .then(user => {
            user.getRoles().then(roles => {
                for(let i = 0; i < roles.length; i++) {
                    if(roles[i].name === 'admin') {
                        next();
                        return;
                    }
                }
                return res.status(403).send({
                    message: "Necesita permisiuni de administrator"
                });
            });
        });
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};

module.exports = authJwt;