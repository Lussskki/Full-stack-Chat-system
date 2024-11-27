// src/utils/jwt.js
import jwt from 'jsonwebtoken'
// To hash
import dotenv from 'dotenv'
dotenv.config()


const generateToken = (_id, nick) => {
    const jwtSecret = process.env.JWT_SECRET
    return jwt.sign(
        {_id, nick},
        jwtSecret,
        {expiresIn: '1h'}
        
    )
    
}

export default generateToken
