import { Request, Response } from "express"


export const postUser = async (_req: Request, res: Response) => {

    res.status(201).json({
        status: 201,
        data: 'User created successfully'
    })

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
        data: {body , id}
    })
}