import { DataTypes } from "sequelize";

const User = (sequelize) => {
  const UserModel = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "UserTypes",
          key: "id",
        },
      },
    },
    {
      tableName: "Users",
      timestamps: true,
    }
  );

  UserModel.associate = (models) => {
    UserModel.belongsTo(models.UserType, {
      foreignKey: "user_type_id", // Foreign key in this model
      as: "userType", // Alias for the association
    });
  };

  return UserModel;
};

export default User;
