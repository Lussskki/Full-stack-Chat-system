// src/db/mongoDbschema
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nick: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const UserSchema = mongoose.model('User', userSchema)

export default UserSchema
