// src/controllers/loginController.js
import { compare } from "bcrypt"
import UserSchema from "../db/mongoDbschema/userSchema.js"
import generateToken from "../utils/jwt.js"

const login = async (req, res) =>{
    const {nick, password} = req.body

    // Both credential are neccesary for login 
    if (!nick || !password) {
        return res.status(400).json({message: 'Both nick and password are necessary'}) 
    }

    try{
        // Find nick
        const user = await UserSchema.findOne({nick})
        // User not find
        if (!user) {
            return res.status(401).json({message:'User not found'})
        }
        // Compare to hashed password
        const isValidPass = await compare(password, user.password) 
        if (!isValidPass) {
            res.status(401).json({message: 'Invalid nick or password'})
        }
        // Generating token
        const token = generateToken(user._id)
        // Send token to successfuly login
        return res.status(200).json({message: 'Login successful', token})
    }catch(error){
        return res.status(500).json({message: 'Error during login', error})
    }

}
export default login