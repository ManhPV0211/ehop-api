import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export function createToken(userInfo) {
    return new Promise((resolve, reject) => {
        jwt.sign({userInfo},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: 15},
            (err, token) => {
                if(err) return reject(err)
                return resolve(token)
            })
    })
};

export function checkToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, data) => {
                if(err) return reject(err)
                return resolve(data)
            }
        )
    })
};

export function createRefreshToken(userInfo) {
    return new Promise((resolve, reject) => {
        jwt.sign({userInfo},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: "1d"},
            (err, refreshToken) => {
                if(err) return reject(err)
                return resolve(refreshToken)
            })
    })
};

export function checkRefreshToken(refreshToken) {
    return new Promise((resolve, reject) => {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, data) => {
                if(err) return reject(err)
                return resolve(data)
            }
        )
    })
};