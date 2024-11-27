// src/routes/profileRoute.js
import express from 'express'
import profileController from '../controllers/profileController.js'
import authMiddleware from '../utils/profileMiddleware.js'
 
const routeProfile = express.Router()
// fetch all data 
routeProfile.get('/', authMiddleware,profileController)

export default routeProfile
