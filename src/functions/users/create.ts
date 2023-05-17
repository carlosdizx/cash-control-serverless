import "reflect-metadata";
import {APIGatewayProxyHandler} from "aws-lambda";
import responseObject from "../../utils/Response";
import UsersCrudService from "../../services/users.crud.service";

export const handler: APIGatewayProxyHandler = async (event, context) => {
    console.log(`HANDLER: Starting ${context.functionName}...`);

    if (typeof event.body === "string"){
        const {name, email, password} = JSON.parse(event.body);
        return await UsersCrudService.create({name, email, password});
    }
    return responseObject(400, {message: "Body is required"});
};
