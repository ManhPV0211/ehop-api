import { checkToken } from "../common/jwtActions.js";

async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if(token) {
        try {
            const authData = await checkToken(token);
            req.auth = authData;
            next();
        } catch {
            res.status(403).send("Invalid Token or Token Expired")
        }
    } else {
        res.status(403).send("Have not provide token")
    }
};

export default authMiddleware;