module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('roles', {
        name: {type: Sequelize.STRING}
    },
    {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    
    return Role;
    
}