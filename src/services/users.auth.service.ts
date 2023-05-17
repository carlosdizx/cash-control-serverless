import User from "../entities/User.entity";
import responseObject from "../utils/Response";
import getConnect from "../utils/DatabaseConnection";
import { generateToken } from '../utils/AuthUtils';
import { encryptPassword, validatePassword } from '../utils/bcryptUtils';

export default class UsersAuthService {
    public static create = async ({name, email, password}:{name: string, email: string, password: string}) => {
        const hashedPassword = await encryptPassword(password);
        return responseObject(200, {password, hashedPassword})
    }
}
