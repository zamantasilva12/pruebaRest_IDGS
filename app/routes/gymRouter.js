const express= require('express')
const router = express.Router()
const ejercicioController = require('../controllers/ejercicioController')

router.get('/Ejercicios', ejercicioController.BuscarTodo)
module.exports=router