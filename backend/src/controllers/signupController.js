// src/controllers/sigup.controller.js
import UserSchema from "../db/mongoDbschema/userSchema.js"
// To hash passwords
import bcrypt from 'bcrypt'
//  Token
import generateToken from '../utils/jwt.js'


const signup = async (req,res) => {
    const {nick, password} = req.body

    if (!nick || !password) {
        return res.status(400).json({message: 'Nick and Password are required'})
    }
    try{
        const existingUser = await UserSchema.findOne({ nick })
        if (existingUser) {
            return res.status(400).json({message: 'Nick is already taken'})
        }
        
        // Hash password
        const hashPassword = await bcrypt.hash(password, 10)
        
        // New user
        const newUser = new UserSchema({nick, password: hashPassword})
        await newUser.save() 
        // console.log(newUser)

        // Generate token
        const token = generateToken(newUser._id, newUser.nick)

        // Respond with success and the generated token
        res.status(201).json({
            message: 'User created successfully',
            token,
          })
        // console.log(token)  
        } catch (error) {
          console.error('Error creating user:', error)
          res.status(500).json({ message: 'Server error' })
        }
}

export default signup