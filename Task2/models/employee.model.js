module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        name: {type: Sequelize.STRING},
        adress: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        hire_date: {type: Sequelize.DATE},
        salary: {type: Sequelize.INTEGER},
        job_title: {type: Sequelize.STRING},

        
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    return Employee;
};