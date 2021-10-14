const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.roles;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    console.log("in signup")
    if(!req.body.username) {
        res.status(400).send({
            message: "Continutul nu poate fi gol!"
        });
        return;
    }

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }

    User.create(user)
        .then(user => {
            console.log(JSON.parse(req.body["roles[]"]))
            let r_roles = JSON.parse(req.body["roles[]"]);
            if(r_roles) {
                Role.findAll({
                    where: {name: {[Op.or]: r_roles}}
                })
                .then(roles => {
                    user.setRoles(roles).then(() => {
                        console.log(roles);
                        res.send({message: "Utilizator inregistrat cu succes!"})
                    });
                });
            } else {
                user.setRoles([1]).then(() => {
                    res.send({message: "Utilizator inregistrat cu succes!"})
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Eroare la adaugarea utilizatorului!"
            })
        });
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if(!user){
            return res.status(404).send({message: "Utilizatorul nu a fost gasit!"});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Parola Invalida!"
            });
        }

        var token = jwt.sign({ id: user.id}, config.secret, {
            expiresIn: 86400
        });

        var authorities = [];
        user.getRoles().then(roles => {
            for(let i = 0; i< roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        })

        
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
}