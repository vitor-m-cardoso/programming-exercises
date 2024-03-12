const ProfileModel = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    accountId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    timestamps: false,
    tableName: 'Profiles',
    underscored: true,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account, {
      foreignKey: 'accountId', as: 'account',
    });
  };

  return Profile;
};

module.exports = ProfileModel;
