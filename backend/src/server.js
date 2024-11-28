// src/server.js
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import cors from 'cors'
// Database 
import mongoDB from './db/mongoDb.js'
// Routes
import signUp from './routes/signupRoute.js'
import login from './routes/loginRoute.js'
import profile from './routes/profileRoute.js'


const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET']
}))

app.use('/api/signup', signUp)
app.use('/api/login', login)
app.use('/api/profile', profile)

app.listen(PORT, () => {
    console.log('App listens to port 3001')
})