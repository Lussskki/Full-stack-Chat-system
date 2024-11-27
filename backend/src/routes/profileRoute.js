// src/routes/profileRoute.js
import express from 'express'
import profileController from '../controllers/loginController.js'
 
const routeSignup = express.Router()

routeSignup.post('/', profileController)

export default routeSignup
