import User from "../entities/User.entity";
import getConnect from "../utils/DatabaseConnection";

export default class UserDao {

    public static create = async (name: string, email: string, password: string) => {
        const datasource = await getConnect();
        const repository = datasource.getRepository(User);
        const user = repository.create({ name, email, password });
        return await repository.save(user);
    }
}
