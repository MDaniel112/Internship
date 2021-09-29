module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        project_name: {type: Sequelize.STRING},
        start_date: {type: Sequelize.DATE},
        planned_end_date: {type: Sequelize.DATE},
        description: {type: Sequelize.STRING},
        project_code: {type: Sequelize.STRING}

        
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    return Project;
};