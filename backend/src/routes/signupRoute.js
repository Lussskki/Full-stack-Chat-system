// src/routes/signupRoute.js
import express from 'express'
import signupController from '../controllers/signupController.js'
 
const routeSignup = express.Router()

routeSignup.post('/', signupController)

export default routeSignup
