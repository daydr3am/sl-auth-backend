import { Model, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";

import { sequelize } from "../config/database";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number;
    declare uuid: string;
    declare first_name: string;
    declare last_name: string;
    declare e_mail: string;
    declare hashed_password: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    e_mail: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    hashed_password: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize
})