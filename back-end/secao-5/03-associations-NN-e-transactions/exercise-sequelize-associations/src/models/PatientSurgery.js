module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {
    patientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    surgeryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'patient_surgeries',
    underscored: true,
  });

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
  };

  return PatientSurgery;
};
