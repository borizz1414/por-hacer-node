## Aplicación de comandos en NodeJs

Esta es una aplicación de tareas por hacer donde podras crear una nueva tarea, borrar, actualizar y listar mediante la terminal, por ejemplo (node app crear -descripcion "Debo hacer la comida a las 7am" -completado false).

Lo desarrolle de manera de practica con NodeJs y utilizando el paquete de Yargs

Instalar los paquetes 
```
npm install
```
## Comandos de la aplicación

Crear una tarea: node app crear -descripcion "Debo correr a las 6am" -completado false
Listar tareas: node app listar
Actualizar una tarea: node app actualizar -descripcion "Debo correr a las 6am" 
Borrar una tarea: node app borrar -descripcion "Debo correr a las 6am"

Se puede utilizar alias por ejemplo: -d -c 