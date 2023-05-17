import User from "../entities/User.entity";
import responseObject from "../utils/Response";
import getConnect from "../utils/DatabaseConnection";
import { generateToken } from '../utils/AuthUtils';
import { encryptPassword, validatePassword } from '../utils/bcryptUtils';
import UserDao from "../dao/User.dao";

export default class UsersAuthService {
    public static create = async ({name, email, password}:{name: string, email: string, password: string}) => {
        const hashedPassword = await encryptPassword(password);
        const result = await UserDao.create(name, email, hashedPassword);
        return responseObject(200, result);
    }
}
