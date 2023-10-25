import User, { IUser, IUserLogin, IUserRegister } from "../models/user.model"

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

export const findAllUsers = async () => {
    try {
        const result = await User.findAll();
        const mapUsers = result.map(({ dataValues }) => {
            const { password, ...rest } = dataValues
            return rest as IUser
        })
        return mapUsers
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
};

export const updateUser = async (id: number, user: IUser) => {
    console.log("user tp edit", user)
    try {
        const getUser = await User.findByPk(id);
        // console.log('User', getUser);
        if (!getUser) {
            throw { code: 404, message: 'user not found' }
        }
        await getUser?.update(user)
        // console.log(edit)
    } catch (error: any) {
        console.log(error);
        if (error.code === 404) {
            throw error;
        }
        throw { code: 400, message: 'Invalid data' }
    }
};

export const deletedUser = async (id: number) => {
    try {
        const getUser = await User.findByPk(id)
        console.log('User', getUser);
        if (!getUser) {
            throw { code: 404, message: 'User not found' };
        }
        await getUser.destroy()
    } catch (error: any) {
        console.log(error);
        if (error.code === 404) {
            throw error;
        }
        throw { code: 404, message: 'Invalid data' };
    }
};

export const getUserByIdServ = async (id: number) => {
    try {
        const getUser = await User.findByPk(id)
        console.log('User', getUser);
        if (!getUser) {
            throw { code: 404, message: 'User not found' };
        }
        return getUser.dataValues as IUserRegister;
    } catch (error: any) {
        console.log(error);
        if (error.code === 404) {
            throw error;
        }
        throw { code: 404, message: 'Invalid data' };
    }
};

export const login = async (user: IUserLogin) => {
    const { email } = user
    try {
        const getUser = await User.findOne({
            where: {
                email,
            }
        })
        if (!getUser) {
            throw { code: 404, message: 'user not found' }
        }
        return getUser.dataValues as IUserLogin
    } catch (error) {
        throw error
    }
}