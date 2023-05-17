import jwt from 'jsonwebtoken';
import dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (user) => {
    return jwt.sign(user, JWT_SECRET, {expiresIn: '1d'});
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
}

export { generateToken, verifyToken };
