import User, { IUserRegister } from "../models/user.model"

export const createUser = async (user:IUserRegister) => {
    try {
        const result = await User.create({ ...user})
        console.log('User added:', result);
    } catch (error:any) {
        throw { code:409, message: 'user is already exist'}
    }
}