const mongoose = require('mongoose')
const EjerciciosEschema = mongoose .Schema({
    nombre:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    duracion:{
        type:Number,
        required:true
    },
    calorias:{
        type:Number,
        required:true
    }
})

const ejercicio = mongoose.model('Ejercicios',EjerciciosEschema)
module.exports = ejercicio;