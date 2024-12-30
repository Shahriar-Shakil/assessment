import { DataTypes } from "sequelize";

const UserType = (sequelize) => {
  const UserTypeModel = sequelize.define(
    "UserType",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "UserTypes",
      timestamps: true,
    }
  );
  UserTypeModel.associate = (models) => {
    UserTypeModel.hasMany(models.User, {
      foreignKey: "user_type_id",
      as: "users",
    });
  };

  return UserTypeModel;
};

export default UserType;
