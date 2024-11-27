// src/controllers/profileController.js
import UserSchema from "../db/mongoDbschema/userSchema.js"


const profile = async (req, res) => {
    try{
        const user = await UserSchema.findById(req.user._id).select('-password')

        if (!user) {
            return res.status(401).json({message: 'Nick not found'})
        }
        // console.log(`Profile: `, user)
        return res.status(200).json({
            message: 'Profile fetched successfully',
            profile: user
        })
    }catch(error){
        console.log(error)
        return res.status(401).json({message: 'Server error'})
    }
}

export default profile