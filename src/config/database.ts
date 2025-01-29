import { Sequelize } from "sequelize"

const databaseString = 'sqlite:memory:'

export const sequelize: Sequelize = new Sequelize("databaseString")