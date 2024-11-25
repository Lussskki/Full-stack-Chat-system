// src/utils/jwt.js
import jwt from 'jsonwebtoken'
// To hash
import dotenv from 'dotenv'
dotenv.config()

const generateToken = (_Id, nick) => {
    const jwtSecret = process.env.jwtSecret
    return jwt.sign(
        {_Id, nick},
        jwtSecret,
        {expiresIn: '1h'}
        
    )
    
}

export default generateToken
