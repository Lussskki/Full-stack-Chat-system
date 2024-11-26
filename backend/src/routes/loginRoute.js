// src/rotes/loginRoute.js
import express from 'express'
import loginController from '../controllers/loginController.js'


const routeLogin = express.Router()

routeLogin.post('/', loginController)

export default routeLogin