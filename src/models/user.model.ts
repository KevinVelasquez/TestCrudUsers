import db from "../config/db.config"

import { DataTypes } from "sequelize";
export interface IUser {
    id: number
    name: string
    lastname: string
    mobilePhone: number
    email: string
}

export interface IUserRegister extends IUser {
    password: string
}

export interface IUserLogin extends Pick<IUserRegister, 'email' | 'password'> {

}


const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        validate: {
            is: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$'
        }
    },
    lastname: {
        type: DataTypes.STRING,
        validate: {
            is: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$'
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }

    },
    mobilePhone: {
        unique: true,
        type: DataTypes.NUMBER,
        validate: {
            isNumeric: true
        }

    },
    password: {
        type: DataTypes.STRING
    }
})


export default User; 