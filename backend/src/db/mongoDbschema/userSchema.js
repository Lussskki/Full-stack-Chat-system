// src/db/mongoDbschema
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nick: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserSchema = mongoose.model('Text', userSchema)

export default UserSchema
