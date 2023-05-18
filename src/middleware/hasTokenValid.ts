import responseObject from "../utils/Response";
import {verifyToken} from "../utils/AuthUtils";
const hasTokenValid = () => {
    return {
        before: async (handler) => {
            console.log('MIDDLEWARE: Starting hasTokenValid method');
            handler.context.callbackWaitsForEmptyEventLoop = false;
            const headers = handler.event.headers;
            const {Authorization} = headers;
            const token = Authorization && Authorization.split(" ")[1];
            if(token){
                try {
                    verifyToken(token);
                }
                catch (err) {
                    return responseObject(409, {message: "Your token is invalid!"});
                }
            }else
                return responseObject(403, {message: "You are not allowed to access this!"});
        },
        onError: async (handler) => {
            console.log('onError: ', handler.error);
            const e = responseObject(401, handler.error);
            return handler.callback(null, e);
        },
    }
}

export default hasTokenValid;
