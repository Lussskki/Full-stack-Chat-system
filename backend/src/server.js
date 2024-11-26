// src/server.js
import express from 'express'
// Database 
import mongoDB from './db/mongoDb.js'
// Routes
import signUp from './routes/signupRoute.js'
import login from './routes/loginRoute.js'


const app = express()
const PORT = 3000

app.use(express.json())

app.use('/signup', signUp)
app.use('/login', login)

app.listen(PORT, () => {
    console.log('App listens to port 3000')
})