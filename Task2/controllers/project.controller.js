const db = require("../models");
const Project = db.projects;
const Employee = db.employees;

exports.create = (req, res) => {
    if(!req.body.project_name) {
        req.status(400).send({
            message: "Continutul nu poate fi gol!"
        });
        return;
    }

    const project = {
        project_name: req.body.project_name,
        start_date: req.body.start_date,
        planned_end_date: req.body.planned_end_date,
        description: req.body.description,
        project_code: req.body.project_code,
    }

    Project.create(project)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "S-a produs o eroare la crearea proiectului"
            });
        });
}

exports.findAll = (req, res) => {
    const project_name = req.body.project_name;
    var condition = project_name ? { project_name: { [Sequelize.Op.like]: `%${project_name}%` } } : null;
    Project.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "S-a produs o eroare la preluarea proiectelor!"
        });
    });
};

exports.findOne = (req, res) => {
    const project_name = req.params.project_name;

    Project.findOne({ where: {project_name: project_name} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Eroare la preluarea proiectului=" + project_name || err.message
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Project.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if( num == 1){
                res.send({
                    message: "Proiect actualizat cu succes!"
                });
            } else {
                res.send({
                    message: `Nu se poate actualiza proiectul cu id=${id}`
                });
            }
        })
        .catch(err => {
            res.staus(500).send({
                message: `Eroare la actualizarea proiectului cu id=${id}` || err.message
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Project.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Proiectul a fost sters cu succes!"
            });
        } else {
            res.send({
            message: `Nu se poate sterge proiectul cu id=${id}.`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Nu se poate sterge proiectul cu id=" + id
        });
        });
};

exports.getProject = (req, res) => {
    const name = req.params.name;

    Employee.findOne({ 
        include: [{ model:Project }],
        where: {name: name} 
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Eroare la preluarea Angajatului pentru vizualizare proiect cu numele=" + name || err.message
            });
        }); 
}