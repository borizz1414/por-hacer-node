
const descripcion = {
        demand:true,
        alias:'d',
        desc:'Descripción de la tarea por hacer'
        }
const completado = {
    default:true,
    alias:'c',
    desc:'Marca completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer',{
                descripcion
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea',{
               descripcion,
               completado
            })
            .command('borrar', 'Borra mediante la descripción',{
                descripcion:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de la tarea por borrar'
                }
            })
            .help()
            .argv;




module.exports = {
    argv
}
        