const ejercicio = require('../models/EjerciciosModel')
const EjerciciosModel = require('../models/EjerciciosModel')
function BuscarTodo(req, res){
    EjerciciosModel.find({})
    .then(ejercicios=>{
        if(ejercicios.length){
            return res.status(200).send({ejercicios})
        }
        return res.status(204).send({message: 'No hay ejercicios'})
    })
    .catch(e=>{return res.status(404).send({mensaje:`error al buscar la informacion ${e}`})})
}
module.exports ={
    BuscarTodo
} ;