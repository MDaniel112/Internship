const { projects } = require("../models");
const db = require("../models");
const Employee = db.employees;
const Project = db.projects;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: "Continutul nu poate fi gol!"
        });
        return;
    }

    const employee = {
        name: req.body.name,
        adress: req.body.adress,
        email: req.body.email,
        hire_date: req.body.hire_date,
        salary: req.body.salary,
        job_title: req.body.job_title,
        project_id: req.body.project_id
    }
    console.log(employee);

    Employee.create(employee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "S-a produs o eroare la crearea angajatului"
            });
        });
}

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? { name: { [Sequelize.Op.like]: `%${name}%` } } : null;
    Employee.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "S-a produs o eroare la preluarea angajatilor!"
        });
    });
};

exports.findOne = (req, res) => {
    const name = req.params.name;

    Employee.findOne({ where: {name: name} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Eroare la preluarea Angajatului cu numele=" + name || err.message
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if( num == 1){
                res.send({
                    message: "Angajat actualizat cu succes!"
                });
            } else {
                res.send({
                    message: `Nu se poate actualiza angajatul cu id=${id}`
                });
            }
        })
        .catch(err => {
            res.staus(500).send({
                message: `Eroare la actualizarea Angajatului cu id=${id}`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Angajatul a fost sters cu succes!"
            });
        } else {
            res.send({
            message: `Nu se poate sterge angajatul cu id=${id}. Maybe Tutorial was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Nu se poate sterge angajatul cu id=" + id
        });
        });
};
