// src/server.js
import express from 'express'
// Database 
import mongoDB from './db/mongoDb.js'

import signup from './controllers/sigupController.js'

const router = express.Router()
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/', signup)

app.listen(PORT, () => {
    console.log('App listens to port 3000')
})