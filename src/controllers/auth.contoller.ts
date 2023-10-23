import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { login } from '../services/user.service';
export const SECRET_KEY: Secret = 'your-secret-key-here';

export const authLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const result = await login({ email, password })
        console.log('Login', result)
        const isMatch = bcrypt.compareSync(password, result.password)
        if (!isMatch) {
            throw { code: 401, message: 'Invalid credencials' }
        }
        const token = jwt.sign({ email }, SECRET_KEY, {
            expiresIn: '1 days',
        });
        res.status(200).json({
            status: 200,
            data: {
                email,
                token
            },
            message: 'Login successfully'
        })
    } catch (error: any) {
        const { code, message } = error
        res.status(code).json({
            status: code,
            message: message
        })
    }
}