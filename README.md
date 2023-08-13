# CRUD-SEGUNDO-PROYECTO2.0
Segundo Proyecto 2.0
Proyecto creado para poder hacer un seguimiento de los deportistas que hoy se encuentran inscritos en el club de judo Shiru, a través de esto se puede identificar el correo personal de cada uno, nombre completo, telefono personal y el grado de cinturón en el que se encuentran. Ante cualquier eventualidad se puede hacer modificaciones en cada uno de los campos sin necesidad de borrar los datos ya ingresados.
 
Las tecnologías utilizadas fueron HTML, CSS y JavaScript.	

En JS se puede visualizar las diferentes funciones realizadas para crear el CRUD, que se detallaran a continuación:

validateForm nos permite validar el formulario realizado siendo obligatorio rellenar cada uno de los campos o de lo contrario se dará una alerta que el campo debe ser completado, obteniendo atraves de getElementById los valores de los campos desde el html.

showData funciones que nos permite mostrar la tabla de HTML creada desde JS, almacenando los datos ingresado en localStorage.

addData es la funciona que permite hacer el ingreso de los datos por parte de los usuarios, siempre validando cada uno de estos este completo. Con setItem que recibe la clave y el valor para añadirlo en localStorage y poder actualizarlo cuando el usuario realice dicha función.

deleteData función para poder borrar datos de la lista ya realizada por los usuarios con el botón borrar.

updateData función que se realiza para darle uso al botón actualizar y así poder rellenar los campos cuando los usuarios actualicen alguno.
