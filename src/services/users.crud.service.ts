import {User} from "../entities/User.entity";
import responseObject from "../utils/Response";
import getConnect from "../utils/DatabaseConnection";

export default class UsersCrudService {
    public static create = async ({name, email, password}:{name: string, email: string, password: string}) => {
        const datasource = await getConnect();
        const userRepository = datasource.getRepository(User);
        if(name && email && password && name.trim() !== "" && email.trim() !== "" && password.trim()){
            const user = new User();
            user.name = name;
            user.email  = email;
            user.password  = password;

            await userRepository.save(user);

            return responseObject(200, user);
        }
        return responseObject(400, {message: "Invalid data passed"})
    }
}
