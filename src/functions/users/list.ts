import { APIGatewayProxyHandler } from "aws-lambda";
import responseObject from "../../utils/Response";
import {User} from "../../entities/User.entity";

export const handler: APIGatewayProxyHandler = async (event, context) => {
    console.log(`HANDLER: Starting ${context.functionName}...`);

    if (event.queryStringParameters){

        const user: User = new User();
        user.name = "Carlos Diaz";
        user.email= "carlosbiche98@gmail.com";
        user.password = "xd";
        return responseObject(200, user);
    }
    return responseObject(400, {message: "Query parameters are required"});
};
