// src/routes/signupRoute.js
import express from 'express'
import signupC from '../controllers/sigupController.js'
 
const routeSignup = express.Router()

routeSignup.post('/signup', signupC)

export default routeSignup
