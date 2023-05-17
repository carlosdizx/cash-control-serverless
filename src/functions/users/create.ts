import "reflect-metadata";
import {APIGatewayProxyHandler} from "aws-lambda";
import responseObject from "../../utils/Response";
import UsersAuthService from "../../services/users.auth.service";

export const handler: APIGatewayProxyHandler = async (event, context) => {
    console.log(`HANDLER: Starting ${context.functionName}...`);

    if (typeof event.body === "string"){
        const {name, email, password} = JSON.parse(event.body);
        return await UsersAuthService.create({name, email, password});
    }
    return responseObject(400, {message: "Body is required"});
};
