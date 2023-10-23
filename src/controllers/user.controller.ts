import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { IUserRegister } from "../models/user.model"
import { createUser, findAllUsers, updateUser } from "../services/user.service"
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
        const { code, message } = error
        res.status(code).json({
            status: code,
            message: message
        })
    }
}

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const listUserServ = await findAllUsers()
        res.status(201).json({
            status: 201,
            data: listUserServ
        })

    } catch (error) {
        res.status(400).json({
            status: 400,
            data: error
        })
    }
}

export const patchUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {
        await updateUser(+id, body)
        res.status(200).json({
            status: 200,
            data: 'User update successfully'
        })
    } catch (error: any) {
        const { code, message } = error
        res.status(code).json({
            status: code,
            message : message
        })
    }
}