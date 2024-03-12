const AccountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Accounts',
    underscored: true,
  });

  Account.associate = (models) => {
    Account.hasOne(models.Profile, {
      foreignKey: 'accountId', as: 'profile',
    });
    Account.hasMany(models.Comment, {
      foreignKey: 'accountId', as: 'comments',
    });
  }

  return Account;
};

module.exports = AccountModel;
