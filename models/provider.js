module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('patient', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      providerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    return Provider;
  };
  