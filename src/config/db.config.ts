require('dotenv').config();
import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || 'valor_predeterminado_db_name'
const dbUser = process.env.DB_USER || 'valor_predeterminado_db_user'
const dbPassword = process.env.DB_PASSWORD || 'valor_predeterminado_db_password'
const dbHost = process.env.DB_HOST || 'valor_predeterminado_db_host'

const db = new Sequelize(dbName,dbUser,dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})

export default db