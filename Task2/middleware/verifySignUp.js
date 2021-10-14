const { ROLES } = require("../models");
const db = require("../models");
const User = db.users;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (user) {
        return res.status(400).send({
          message: "Numele este deja folosit!"
        });
      }

    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        return res.status(400).send({
          message: "Email-ul este deja folosit"
        });
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if(req.body.roles) {
    for (let i = 0; i< req.body.roles.length; i++) {
      if(!ROLES.includes(req.body.roles[i])) {
        return res.status(400).send({
          message: "Rolul nu exista! " + req.body.roles[i]
        });
      }
    }
  }
  next();
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;