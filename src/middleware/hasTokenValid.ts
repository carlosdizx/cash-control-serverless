import responseObject from "../utils/Response";
const hasTokenValid = () => {
    return {
        before: async (handler) => {
            console.log('MIDDLEWARE: Starting hasTokenValid method');
            handler.context.callbackWaitsForEmptyEventLoop = false;
            const headers = handler.event.headers;
            const {Authorization} = headers;
            const token = Authorization && Authorization.split(" ")[1];
            if(token){

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
