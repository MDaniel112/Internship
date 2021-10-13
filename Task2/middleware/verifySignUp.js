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
      return;
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
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;