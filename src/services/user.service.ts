import User, { IUserRegister } from "../models/user.model"

export const createUser = async (user: IUserRegister) => {
    //console.log('Service', user)
    try {
        const result = await User.create({ ...user })
        console.log('User added:', result);
    } catch (error: any) {
        //console.log('Error', error)
        throw { code: 409, message: 'user is already exist' };

    }
};