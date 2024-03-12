const CommentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    message: DataTypes.STRING,
    upvoting: DataTypes.INTEGER,
    downvoting: DataTypes.INTEGER,
    accountId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    timestamps: false,
    tableName: 'Comments',
    underscored: true,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Account, {
      foreignKey: 'accountId', as: 'account',
    });
  };

  return Comment;
};

module.exports = CommentModel;
