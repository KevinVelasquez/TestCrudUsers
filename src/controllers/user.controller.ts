import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { IUserRegister } from "../models/user.model"
import { createUser } from "../services/user.service"
const SALT_ROUNDS = 8;

export const postUser = async (req: Request, res: Response) => {
    const password = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    const user: IUserRegister = {
        ...req.body,
        password
    }

    console.log('User to create', user)
    try {
        const createUserServ = await createUser(user)
        console.log('Create', createUserServ)
        res.status(201).json({
            status: 201,
            data: 'User created successfully'
        })

    } catch (error: any) {
        const { code, message }= error
        res.status(code).json({
            status: code,
            message:message
        })
    }
}

export const getUsers = async (_req: Request, res: Response) => {
    res.status(201).json({
        status: 201,
        data: 'Get users'
    })
}

export const patchUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    res.status(200).json({
        status: 200,
        data: { body, id }
    })
}